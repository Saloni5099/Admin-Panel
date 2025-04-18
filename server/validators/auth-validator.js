const {z} = require("zod");

//creating an object schema
const signupSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .min(3,{message:"Invalid email address"})
    .max(255,{message:"email must not be more than 255 characters"}),
    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be of 10 characters"})
    .max(10,{message:"Phone must be of 10 characters"}),
    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,{message:"Password must be atleast of 6 characters"})
    .max(255,{message:"Password must not be more than 255 characters"}),
});

module.exports = signupSchema;