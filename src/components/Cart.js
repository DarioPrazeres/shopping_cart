import React from "react";
import Product from "./Product";
function Cart(props){
    const colections= props.allProducts
    const qtd = Array(colections.length);
    for(let i=0; i<qtd.length; i++)qtd[i]=1
    function changeNumber(index, event){
        var value = event.target.value;
        qtd[index] = value;
        console.log(qtd[index]);
    }
    return(
        <>
            <h1>I am Cart</h1>
            <div className="cl">
                    <h1 className="p-2">Spring-Summer 2021</h1>
                   <div className="gridShow">
                        {colections.map((colection, i)=>{
                            return (
                                    <div key={i} className="p-2">
                                        <Product  product={colection}/>
                                            <label>Qtd:</label>
                                            <input type="number" className="form-control" placeholder="Your Name" onChange={()=>changeNumber(i)} value={qtd[i]} name='' id="name"/>
                                            <h6>Total: {Number(qtd[i])* Number.parseInt(colection.price)}</h6>
                                        <button className="btn border">Buy Now</button>
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