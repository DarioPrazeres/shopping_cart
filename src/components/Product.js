import React from "react";
import "../css/menu.css";
function Product(props){
    return (
        <div className="product">
            <img src={props.srcImage} alt=""/>
            <h5>{props.nameProduct}</h5>
            <h5>{props.priceProduct}</h5>
        </div>
    );
}
export default Product;