/**
 * One-time script to set a user as admin by email.
 * Usage: Set ADMIN_EMAIL in .env, then run: npm run set-admin
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });
const mongoose = require("mongoose");
const User = require("../models/user-model");

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

if (!MONGODB_URI) {
    console.error("Missing MONGODB_URI in .env");
    process.exit(1);
}
if (!ADMIN_EMAIL) {
    console.error("Missing ADMIN_EMAIL in .env. Set it to the email of the user you want to make admin.");
    process.exit(1);
}

async function setAdmin() {
    try {
        await mongoose.connect(MONGODB_URI);
        const user = await User.findOneAndUpdate(
            { email: ADMIN_EMAIL.trim() },
            { $set: { isAdmin: true } },
            { new: true }
        );
        if (!user) {
            console.error(`No user found with email: ${ADMIN_EMAIL}`);
            process.exit(1);
        }
        console.log(`User ${user.email} is now an admin.`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
    }
}

setAdmin();
