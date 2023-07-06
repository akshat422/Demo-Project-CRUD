const app=require("./app");
const dotenv=require("dotenv")
const connectDB=require("./config/database")

//config
dotenv.config({path:"./config/config.env"})
connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is running");
})
