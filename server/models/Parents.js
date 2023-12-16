const mongoose= require("mongoose");

const parentSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true,
    },
    prenom:{
        type:String,
        required:true,
    },
    CIN:{
        type:Number,
        required:true,
    },
    telph:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:false,
    },
    adress:{
        type:String,
        required:true,
    }
})

const ParentModel = mongoose.model("Parent",parentSchema)

module.exports = ParentModel ;