import BannerColection from "../components/BannerColection";
import "../css/menu.css";

import Product from "../components/Product";
function showDatta(array){
    console.log(array);
}
const Services = (props)=>{
    const redDress = props.redDress
    const blackStyle = props.blackStyle;
    const colections = props.colections;
    return (
        <div className="dp">
            <div className="colection">
                <div className="cl">                    
                    <BannerColection src={redDress}/>
                </div>
                <div className="cl">
                    <h1 className="p-2">Spring-Summer 2021</h1>
                   <div className="gridShow">
                        {colections[0].map((colection, i)=>{
                            return (
                                    <div key={i} className="p-2">
                                        <Product  product={colection}/>
                                        <button className="btn border" onClick={()=>showDatta(colections[0][i])}>Add Cart</button>
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
                        {colections[1].map((colection, c)=>{
                            return (
                                    <div key={c} className="p-2">
                                        <Product  product={colection}/>
                                        <button className="btn border" onClick={()=>showDatta(colections[1][c])}>Add Cart</button>
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