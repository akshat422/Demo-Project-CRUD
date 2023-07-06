import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import MetaData from "./MetaData"
import { getProduct, sendProduct } from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux"



export default function Home(){
const [comments,setComments]=useState([{
    name:"Akshat",
    comment:"This is a good product"
},{
    name:"Kotwalla",
    comment:"They are selling rotten potatoes"
}])

    const dispatch=useDispatch();
    const tosend={name:"Kartik_NEW",comment:"This is Demo"};
    useEffect(()=>{
        dispatch(getProduct());
        // dispatch(sendProduct(tosend));
    },[dispatch]);
    
    const data=useSelector((state)=>{console.log(state);return state.product})
    
    // console.log(data.product);
    

    return(
        <>
        <MetaData title="My Custom Component"/>
        <div className="container mt-4">
            <h3>Your thoughts</h3>
            <form className="p-2">
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Example label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Another label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                </div>
            </form>
        </div>
        <div className="container mt-3 pt-3">
        <h3>Comments</h3>
            {   
                data.product&&data.product.map((comment)=>{
                    return <Comments key={comment.id} comments={comment}/>
                })
            }
        </div>
        </>
    )
}