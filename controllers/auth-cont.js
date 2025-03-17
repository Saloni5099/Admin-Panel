 // in an express js application, a "controller" refers to a part of your code that is responsible for handling the applications's logic.
 // Controllers are typically used to process incoming requests,interact with models(data sources),and send responses back to client. 
 // They help organizee your application by separating concerns and following the MVC(Model-view-controller) design pattern
 
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

const register = async (req,res)=>{
    try{
        console.log(req.body);
        res.status(200).json({message:req.body});
    }catch(error){
       res.status(400).json({msg:"page not found"})
    }
};

module.exports = {home,register};