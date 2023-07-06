const Product=require("../models/productModel")
const ErrorHandler = require("../utils/errorHandler")
const AsyncErrror=require("../middleware/catchAsyncError");

exports.createProduct=AsyncErrror(async(req,res)=>{
    const product=await Product.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
})

exports.getAllProducts=AsyncErrror(async(req,res,next)=>{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        products:products
    })
})

exports.updateProduct=AsyncErrror(async (req,res,next)=>{
    let product=Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
})

exports.deleteProduct=AsyncErrror(async(req,res,next)=>{
    // const product=await Product.findById(req.params.id);
    // if(!product){
    //     return next(new ErrorHandler("Product not found",404))
    // }

    await Product.deleteOne({_id:req.params.id});

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully"
    })
})


exports.getProductDetails=AsyncErrror(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found",404))
    }

    res.status(200).json({
        success:true,
        product
    })
});