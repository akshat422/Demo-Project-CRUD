const express=require("express");
const app=express();
const ErrorHandler=require("./utils/errorHandler")

//import routes
const product=require("./routes/productRoute");

// app.use(ErrorHandler)
app.use(express.json())
app.use("/api/v1",product)

module.exports=app;