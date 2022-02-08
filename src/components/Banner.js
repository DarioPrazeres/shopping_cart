import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../css/menu.css";
function Banner(){
    return(
        <div className="banner">
            <div className="banner-1 p-2">
                <div>
                    <h1 className="info">Where you find the best clothes for you and your family</h1>
                    <button className="btn btn-light"><Link className="bt" to="/Services">Services</Link></button>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}
export default Banner;