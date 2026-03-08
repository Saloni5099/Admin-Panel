 // in an express js application, a "controller" refers to a part of your code that is responsible for handling the applications's logic.
 // Controllers are typically used to process incoming requests,interact with models(data sources),and send responses back to client. 
 // They help organizee your application by separating concerns and following the MVC(Model-view-controller) design pattern
 const User = require("../models/user-model");
 const bcrypt = require("bcrypt");
// *___________________
// Home logic 
// *___________________

const home = async (req,res)=>{
    try{
        res.status(200).json({message:"Welcome to my page using controllers"});
    }catch(error){
       res.status(500).json("internal server error");
    }
};
// *___________________
// Registration logic 
// *___________________

const register = async (req, res, next) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "email already registered" });
        }
        const userCreated = await User.create({
            username,
            email,
            phone,
            password,
        });
        res.status(201).json({
            msg: "Registration Successfull",
            token: await userCreated.generateToken(),
            userid: userCreated._id.toString(),
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// *___________________
// Login logic 
// *___________________

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "Email and password are required" });
        }
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(401).json({ msg: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (isMatch) {
            res.status(200).json({
                msg: "Login Successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ msg: "Invalid email or password" });
        }
    } catch (error) {
        next(error);
    }
};

/*_____________________________

USER LOGIN
_______________________________*/


const user = async (req, res, next) => {
    try {
        const userData = req.user;
        return res.status(200).json({ userData });
    } catch (error) {
        next(error);
    }
};

// In most cases,converting _id to a string is a good practice because it ensures consistency and compatibility 
// across differnt JWT libraries and system. It also aligns with the expectations that claims in a JWT
// are represented as strings

module.exports = {home,register,login,user};