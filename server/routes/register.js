const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

import ParentModel from "../models/Parents";


router.post('/',async(req,res)=>{
    try{
        const {
            nom,
            prenom,
            CIN,
            telph,
            password,
            email,
            address,
          } = req.body; 
        const parent = await ParentModel.findOne({CIN});
        if(parent){
            return res.json({message:'user exist'})
        }





    }catch(error){
        console.log("error",error)
    }

})