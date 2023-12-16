const express = require("express");
const router = express.Router();
const twilio = require('twilio')

const sendMessage = ()=>{
    const client = new twilio(process.env.AccountSID,process.env.AuthToken)
    client.messages.create({
        body:"hello from dhia ",
        to:'+21650939301',
        from:'+12058988700'
    }).then((message)=>console.log(message.sid)).catch((error)=>{
        console.log('error from twilio',error)
    })
}

router.post('/',(req,res)=>{
    try{
        sendMessage()
        res.status(200).json({message:'successfuly'})
    }catch(error){
        console.log(error)
        res.status(400).json({message:'we have an error to send sms to parent'})
    }
})

module.exports = router;
