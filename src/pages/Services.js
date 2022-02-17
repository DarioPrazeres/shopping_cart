import BannerColection from "../components/BannerColection";
import "../css/menu.css";

import Product from "../components/Product";

const Services = (props)=>{
    const redDress = props.redDress
    const blackStyle = props.blackStyle;
    const posX = [];
    const posY = [];
    function showDatta(vectorIndex, index){
        var n = 0;
        console.log(`${vectorIndex} and ${index}`);
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
                        }
                    }
                }                
            console.log(posX);
        }else{
            
        }
        //props.upDateProd(allProducts);
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
                                        <Product  product={colection}/>
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
                                        <Product  product={colection}/>
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