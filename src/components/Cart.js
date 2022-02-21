import React, {memo, useCallback} from "react";
import Product from "./Product";
import "../css/menu.css";
var allP =[];
function Cart(props){
    allP = props.all;
    const showIndex = useCallback((i) => {        
        props.upDate(i);
        var array = allP;
        allP.splice(i, 1);
        allP= array;
    }, [allP])
    return(
        <div className="c">
            <div className="cl">
                   <div className="gridShow">
                        {allP.map((colection, i)=>{
                            return (
                                    <div key={i} className="p-2 show">
                                        <Product  product={colection} index={i} show={showIndex} visible="d-print-none"/>                                        
                                    </div>
                                );
                            })
                        }
                   </div>
            </div>  
            <button className="btn border bn m-4">Buy Now</button>
        </div>
        
    );
}
export default memo(Cart);