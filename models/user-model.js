const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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

const User = new mongoose.model("User",userSchema);

module.exports = User;