import fashion_1 from "../img/fashion-designer-01.jpg";
import redDress from "../img/redDress.jpg";
import BannerColection from "../components/BannerColection";
import "../css/menu.css";
import { colections } from "../components/Datta";
const Services = ()=>{
    return (
        <div>
            <div className="colection">
                <div className="cl">
                    <h1>Spring-Summer 2021</h1>
                    <BannerColection src={fashion_1}/>
                </div>
                <div className="cl">
                    <BannerColection src={redDress}/>
                    {colections[0].map((colection, i)=>{
                        return <p key={i}>{colection.name}</p>
                    })
                    }
                </div>              
                
            </div>
        </div>
    );
}
export default Services;