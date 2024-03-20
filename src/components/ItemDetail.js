import React from "react";
import { useParams } from "react-router-dom";


const Item= ()=>{

    const params= useParams();
    let count= params.itemId;

    return(
        <div>
            <h1>Item {count}</h1>
            <p>Description for Item {count}</p>
        </div>
    )
}

export default Item
