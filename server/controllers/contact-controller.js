const Contact = require("../models/contact-model");

const contactForm = async(req,res)=>{
    try{
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({msg:"Message send successfully"});
    }catch(error){
        return res.status(500).json({msg:"Message not Delivered.Some error"});
    }
}
module.exports = contactForm;