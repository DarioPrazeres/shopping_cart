import React from "react";
import Product from "./Product";
import "../css/menu.css";
function Cart(props){
    const colections= props.allProducts;
    function upDateQtd(){

    }
    //props.upDate(array, index);
    return(
        <>
            <h1>I am Cart</h1>
            <div className="cl">
                    <h1 className="p-2">Spring-Summer 2021</h1>
                   <div className="gridShow">
                        {colections.map((colection, i)=>{
                            return (
                                    <div key={i} className="p-2 show">
                                        <Product  product={colection}/>
                                        <h6>Total: {colection.qtd * colection.price}</h6>
                                        <div className="d-flex justify-content-center mb-1 show">
                                            <button onClick={()=>upDateQtd(colection.qtd--, i)} className="btn border">-</button>
                                            <h6 className="p-2">{colection.qtd}</h6>
                                            <button onClick={()=>upDateQtd(colection.qtd++, i)} className="btn border">+</button>
                                        </div>
                                        <button className="btn border bn">Buy Now</button>
                                    </div>
                                );
                            })
                        }
                   </div>
                </div>  
        </>
        
    );
}
export default Cart;