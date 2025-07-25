const mongoose = require("mongoose");
require("dotenv").config();


const MONGO_URI = process.env.DATABASE;


mongoose.connect(MONGO_URI)
.then(()=>console.log("DATABASE CONNECTED"))
.catch((err)=>{console.log(err)
})
