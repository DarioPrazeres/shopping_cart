import React from "react";
import "../css/menu.css";
function Product(props){
    return (
        <div className="product">
            <img src={props.product.srcImage} alt=""/>
            <h5>{props.product.nameProduct}</h5>
            <h5>{props.product.priceProduct}</h5>
        </div>
    );
}
export default Product;