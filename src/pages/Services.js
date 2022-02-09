import BannerColection from "../components/BannerColection";
import "../css/menu.css";
import { colections, redDress, blackStyle } from "../components/Datta";
import Product from "../components/Product";
import sold from "../components/Cart"
function showDatta(array){
    console.log(array);
    sold.push(array);
}
const Services = ()=>{
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
                                        <button className="btn border">Add Cart</button>
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