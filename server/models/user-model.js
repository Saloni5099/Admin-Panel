const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
})
//secure the password with bcrypt
userSchema.pre('save',async function(){
    const user = this;
    if(!user.isModified("password")){
       next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
})

//json web tokens

userSchema.methods.generateToken = async function(){
    try {
       return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
       },
       process.env.JWT_SECRET_KEY,
       {
        expiresIn:"30d",
       }
    ) ;
    } catch (error) {
        console.error(error);
    }
};

// Tokens such as JWTs (JSON Web Tokens), are typically not stored in the database along with other user details.
// Instead, they are issued by the server during the authentication process and then stored on the client-side
// (e.g, in cookies or local storage) for later use.
const User = new mongoose.model("User",userSchema);

module.exports = User;