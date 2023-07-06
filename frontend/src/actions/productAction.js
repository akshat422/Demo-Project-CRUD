import React from "react";
import axios from "axios";
import {ALL_PRODUCT_FAIL,ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS, CLEAR_ERROR} from "../constants/productConstant"

export const getProduct=()=>async(dispatch)=>{
    try{
        dispatch({
            type:ALL_PRODUCT_REQUEST
        });

        const {data}=await axios.get("/api/v1/products");

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message 
        });
    }
};

export const sendProduct=(props)=>async(dispatch)=>{
    try{

        const {data}=await axios.post("/api/v1/products/new",{name:props.name,comment:props.comment});

        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message 
        });
    }
};


export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERROR});
};