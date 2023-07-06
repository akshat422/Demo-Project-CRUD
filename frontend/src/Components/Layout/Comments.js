import React from "react";

export default function Comments(props){
    return (
        <>
        <div className="card mt-3">
            <div className="card-header">
                Quote
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{props.comments.comment}</p>
                    <footer className="blockquote-footer">{props.comments.name}</footer>
                </blockquote>
            </div>
        </div>
        </>
    )
}