import React from "react";
import "../css/menu.css";
function Product(props){
    return (
        <div className="product ">
            <img src={props.product.srcImage} alt="" width="100%" hight="100px"/>
            <h5>{props.product.name}</h5>
            <h6>${props.product.price}</h6>
        </div>
    );
}
export default Product;