const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter name"]
    },
    comment:{
        type:String,
        required:[true,"Please Enter your comment"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Product",productSchema); 