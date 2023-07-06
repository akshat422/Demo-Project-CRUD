import React from "react";
import Helmet from "react-helmet";

export default function MetaData(props){
    return (<>
        <Helmet>
            <title>
                {props.title}
            </title>
        </Helmet>
    </>)
}