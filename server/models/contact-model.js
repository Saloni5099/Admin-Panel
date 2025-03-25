const {Schema,model} = require("mongoose");

const contactSchema = new Schema({
    username:{required:true,type:String},
    email:{required:true,type:String},
    message:{required:true,type:String}
});

const Contact = new model("COntact",contactSchema);

module.exports = Contact;