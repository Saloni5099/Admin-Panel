const { z } = require("zod");

const signupSchema = z.object({
    username: z.string({ required_error: "Name is required" }).trim().min(3).max(255),
    email: z.string({ required_error: "Email is required" }).trim().email().max(255),
    phone: z.string({ required_error: "Phone is required" }).trim().length(10),
    password: z.string({ required_error: "Password is required" }).trim().min(6).max(255),
});

const loginSchema = z.object({
    email: z.string({ required_error: "Email is required" }).trim().email(),
    password: z.string({ required_error: "Password is required" }).min(1),
});

module.exports = { signupSchema, loginSchema };