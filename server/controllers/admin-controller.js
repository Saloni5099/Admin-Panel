const mongoose = require("mongoose");
const Contact = require("../models/contact-model");
const User = require("../models/user-model");

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id) && String(new mongoose.Types.ObjectId(id)) === id;

/*_________________________

get all users logic
__________________________*/


const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

/*___________________________

 delete user logic
 ___________________________*/

const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid user id" });
        }
        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
        next(error);
    }
};
/* ________________________

get single user data
___________________________*/

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid user id" });
        }
        const data = await User.findOne({ _id: id }, { password: 0 });
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ data });
    } catch (error) {
        next(error);
    }
};
/* ________________________

Update user data
___________________________*/

const ALLOWED_USER_UPDATE_FIELDS = ["username", "email", "phone"];

const UpdateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid user id" });
        }
        const body = req.body || {};
        const updateUserData = {};
        for (const key of ALLOWED_USER_UPDATE_FIELDS) {
            if (body[key] !== undefined) updateUserData[key] = body[key];
        }
        if (Object.keys(updateUserData).length === 0) {
            return res.status(400).json({ message: "No allowed fields to update" });
        }
        const updatedData = await User.updateOne({ _id: id }, { $set: updateUserData });
        return res.status(200).json({ updatedData });
    } catch (error) {
        next(error);
    }
};
/*_________________________

get all contacts logic
__________________________*/

const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No Contacts Found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};
/*___________________________

 delete COntact logic
 ___________________________*/

const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid contact id" });
        }
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ message: "Contact Deleted Successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = {getAllUsers,getAllContacts,deleteUserById,getUserById,UpdateUserById,deleteContactById};