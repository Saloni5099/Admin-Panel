const Contact = require("../models/contact-model");

const contactForm = async (req, res, next) => {
    try {
        const { username, email, message } = req.body || {};
        if (!username || !email || !message) {
            return res.status(400).json({ msg: "Username, email and message are required" });
        }
        await Contact.create({
            username: String(username).trim().slice(0, 255),
            email: String(email).trim().slice(0, 255),
            message: String(message).trim().slice(0, 2000),
        });
        return res.status(200).json({ msg: "Message send successfully" });
    } catch (error) {
        next(error);
    }
};
module.exports = contactForm;