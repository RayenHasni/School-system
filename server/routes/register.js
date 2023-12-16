const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const ParentModel = require("../models/Parents");

 

router.post('/',async(req,res)=>{
    try{
        const {
            nom,
            prenom,
            CIN,
            telph,
            password,
            email,
            adress,
          } = req.body; 
        const parent = await ParentModel.findOne({CIN});
        if(parent){
            return res.json({message:'user already exist'})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newParent = new ParentModel ({
            nom,
            prenom,
            CIN,
            telph,
            password:hashedPassword,
            email:email|null,
            adress,
        })
        await newParent.save()
        return res.status(200).json({message:'account created successfuly'})
    }catch(error){
        console.log("error",error)
        res.status(500).json({message:'error to create parent '})
    }

})

module.exports = router;
