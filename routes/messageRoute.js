const express = require("express");
const router = new express.Router();
const messages = require("../models/messageSchema");
router.post("/addmsg" , async(req, res)=>{
    const {name , email , phone , subject ,message } = req.body;
    console.log(req.body);
    if(!name || !email || !phone || !subject || !message){
        res.json({status:false , error : "All input require"});
    }

    try{
          const finalUser = new messages({
            name , email , phone , subject ,message
          });
          const storeData = await finalUser.save();
          res.json({status:true,storeData} );
       
    }catch(error){
        res.json({status:false , error : "All input require"});
        console.log("catch error")
    }




});
module.exports = router;