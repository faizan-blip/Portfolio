const user = require('../models/createschema')


exports.create = async(req,res)=>{
    try{
      
        const{name , email , phone , subject , message} = req.body
            
        const response = await user.create({name , email , phone , subject , message})
          res.status(200).json({
            status:true,
            data:response,
            message:"Created the data in the mongoDb"
          })

    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            status:false,
            data:"internal server error",
            message:err.message,
          })
    }
}