import BannerColection from "../components/BannerColection";
import "../css/menu.css";

import Product from "../components/Product";

const Services = (props)=>{
    const redDress = props.redDress
    const blackStyle = props.blackStyle;
    const posX = [];
    const posY = [];
    const cart = [];
    function showDatta(vectorIndex, index){
        var n = 0;
        if(vectorIndex === 0){
            if(posX.length === 0){
                posX.push(index);
            }
                for(let i=0; i<posX.length; i++){
                    console.log(i)
                    if(posX[i] !== index){
                        n++;
                        console.log(n)
                        if(n === posX.length){
                            posX.push(index);
                            props.upDateProd(props.colections[0][posX[i]]);
                            cart.push(props.colections[0][posX[i]]);
                        }
                    }
                }                
            console.log(posX);
        }else{
            if(posY.length === 0){
                posY.push(index);
            }
                for(let i=0; i<posY.length; i++){
                    console.log(i)
                    if(posY[i] !== index){
                        n++;
                        console.log(n)
                        if(n === posY.length){
                            posY.push(index);
                            props.upDateProd(props.colections[1][posY[i]]);
                            cart.push(props.colections[1][posY[i]]);
                        }
                    }
                }                
            console.log(posY);
        }
        console.log(cart);
        //props.upDateProd(cart);
    }
    return (
        <div className="dp">
            <div className="colection">
                <div className="cl">                    
                    <BannerColection src={redDress}/>
                </div>
                <div className="cl">
                    <h1 className="p-2">Spring-Summer 2021</h1>
                   <div className="gridShow">
                        {props.colections[0].map((colection, i)=>{
                            return (
                                    <div key={i} className="p-2">
                                        <Product  product={colection} visible="d-none"/>
                                        <button className="btn border" onClick={()=>showDatta(0, i)}>Add Cart</button>
                                    </div>
                                );
                            })
                        }
                   </div>
                </div>              
                
            </div>
            <div className="colection">
                <div className="cl">
                    <h1 className="p-2">Resort 2021</h1>
                   <div className="gridShow">
                        {props.colections[1].map((colection, c)=>{
                            return (
                                    <div key={c} className="p-2">
                                        <Product  product={colection} visible="d-none"/>
                                        <button className="btn border" onClick={()=>showDatta(1, c)}>Add Cart</button>
                                    </div>
                                );
                            })
                        }
                   </div>
                </div>
                <div className="cl">                    
                    <BannerColection src={blackStyle}/>
                </div>
            </div>
        </div>
    );
}
export default Services;