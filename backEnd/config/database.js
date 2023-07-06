const mongoose=require("mongoose");

const connectDB=()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,family: 4,})
    .then((data)=>{
        console.log("Database connected successfully ");
    }).catch((err)=>{
        console.log(err); 
    })
}

module.exports=connectDB;