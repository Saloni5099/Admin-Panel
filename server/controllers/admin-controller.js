const Contact = require("../models/contact-model");
const User = require("../models/user-model");

/*_________________________

get all users logic
__________________________*/


const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({},{password:0});      // to not show the password we use this {},{password:0}
        console.log(users);
        if(!users||users.length===0){
            return res.status(404).json({message:"No Users Found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error); 
    }
}

/*___________________________

 delete user logic
 ___________________________*/

 const deleteUserById = async (req,res) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successfully"});
    } catch (error) {
        next(error);
    }
 }
/* ________________________

get single user data
___________________________*/

const getUserById = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id},{password:0});
        return res.status(200).json({data});
    } catch (error) {
        next(error);
    }
}
/* ________________________

Update user data
___________________________*/

const UpdateUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        const updateUserData = req.body;
        const updatedData = await User.updateOne({_id:id},{$set:updateUserData});
        return res.status(200).json({updatedData});
    } catch (error) {
        next(error);
    }
}
/*_________________________

get all contacts logic
__________________________*/

const getAllContacts = async (req,res)=>{
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if(!contacts||contacts.length===0){
            return res.status(404).json({message:"No Contacts Found"});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}
/*___________________________

 delete COntact logic
 ___________________________*/

 const deleteContactById = async (req,res) =>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"Contact Deleted Successfully"});
    } catch (error) {
        next(error);
    }
 }

module.exports = {getAllUsers,getAllContacts,deleteUserById,getUserById,UpdateUserById,deleteContactById};