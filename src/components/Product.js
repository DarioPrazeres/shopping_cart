import React, {useState, useEffect, memo} from "react";
import "../css/menu.css";
function Product(props){
    const [count, setCount] = useState(1);
    const sendIndex = (i) =>{
        if(count <= 1){
            props.show(i);
        }
        
    }
    useEffect(()=>{
        //console.log(count);
    }, [count]);
    return (
        <div className="product " key={props.product.id}>
            <img src={props.product.srcImage} alt="" width="100%" hight="100px"/>
            <h5>{props.product.name}</h5>
            <h6>${props.product.price}</h6>
            <div className={props.visible}>
                <h6>Total: {Number(count * props.product.price).toFixed(2)}</h6>
                <div className="d-flex justify-content-center mb-1 show">
                    <button onClick={()=>{setCount((c)=> c-1); sendIndex(props.index);}} className="btn border">-</button>
                    <h6 className="p-2">{count}</h6>
                    <button onClick={()=>{setCount((c)=> c+1);sendIndex(props.index);}} className="btn border">+</button>
                </div>
            </div>
        </div>
    );
}
export default memo(Product);