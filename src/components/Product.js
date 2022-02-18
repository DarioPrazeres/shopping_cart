import React, {useState, useEffect} from "react";
import "../css/menu.css";
function Product(props){
    const [count, setCount] = useState(1);
    useEffect(()=>{
        console.log(count);
    }, [count]);
    return (
        <div className="product " key={props.product.id}>
            <img src={props.product.srcImage} alt="" width="100%" hight="100px"/>
            <h5>{props.product.name}</h5>
            <h6>${props.product.price}</h6>
            <div className={props.visible}>
                <h6>Total: {Number(count * props.product.price).toFixed(2)}</h6>
                <div className="d-flex justify-content-center mb-1 show">
                    <button onClick={()=>{setCount((c)=> c-1); props.product.qtd ++;}} className="btn border">-</button>
                    <h6 className="p-2">{count}</h6>
                    <button onClick={()=>setCount((c)=> c+1)} className="btn border">+</button>
                </div>
            </div>
        </div>
    );
}
export default Product;