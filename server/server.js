const express = require("express");
const app = express();
const cors = require('cors')
const connectWithDataBase= require("./connectWithDataBase/connectWithDataBase")

app.use(cors())

//   the port where the server run
const PORT = process.env.PORT || 3000

//   use json in express 
app.use(express.json());

//   connect with the data base 
connectWithDataBase()




app.get('/',(req,res)=>{
    res.json({message:'successfuly'})
})


app.listen(PORT, () => {
    console.log(`port is listen in ${PORT}`);
  });