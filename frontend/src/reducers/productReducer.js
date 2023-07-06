import {ALL_PRODUCT_FAIL,ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS, CLEAR_ERROR} from "../constants/productConstant"

export const productReducer=(state={products:[],message:""},action)=>{
    switch (action.type){
        case ALL_PRODUCT_REQUEST:
            return{
                loading:true,
                product:[],
                message:"kya karu abb "
            }
        case ALL_PRODUCT_SUCCESS:
            return{
                loading:false,
                product:action.payload.products,
                message:"Ho gya jo hona tha "
            }
        case ALL_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case CLEAR_ERROR:
            return{
                ...state,
                error:null
            }
        default:
            return{}
    }
}