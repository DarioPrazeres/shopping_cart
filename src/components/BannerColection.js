import React from "react";

function BannerColection(props){
    return(
        <div style={{
            backgroundImage: `url(${props.src})`,
            backgroundSize: "cover",
            width : "100%",
            height: "100%"}}>            
        </div>
    );
}
export default BannerColection;