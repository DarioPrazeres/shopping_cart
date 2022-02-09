import BannerColection from "../components/BannerColection";
import "../css/menu.css";
import { colections, redDress, blackStyle } from "../components/Datta";
import Product from "../components/Product";
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
                                    <div className="p-2">
                                        <Product key={i} product={colection}/>
                                        <button className="btn border">Add Cart</button>
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
                                    <div className="p-2">
                                        <Product key={c} product={colection}/>
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