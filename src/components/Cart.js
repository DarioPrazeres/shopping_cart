import React from "react";
import Product from "./Product";
import "../css/menu.css";

function Cart(props){
    const allP = props.all;
    return(
        <div className="c">
            <div className="cl">
                   <div className="gridShow">
                        {allP.map((colection, i)=>{
                            return (
                                    <div key={i} className="p-2 show">
                                        <Product  product={colection} visible="d-print-none"/>                                        
                                    </div>
                                );
                            })
                        }
                   </div>
            </div>  
            <button className="btn border bn">Buy Now</button>
        </div>
        
    );
}
export default Cart;