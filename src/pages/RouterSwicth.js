import React, {useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Layout from "./Layout";
import { colections, redDress, blackStyle } from "../components/Datta";
import Cart from "../components/Cart";
const RouteSwicth = () =>{
    var dario = [];
    
    const hundleDelete=(datta)=>{
        var array = dario;
        dario.splice(datta, 1);
        dario= array;
    }
    const upDateCart = (datta) =>{  
        dario.push(datta);
    }
    useEffect(()=>{}, [dario]);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout nItem={0}/>}>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/Services" element={<Services redDress={redDress} blackStyle={blackStyle} colections={colections} upDateProd={upDateCart}/>}/>
                    <Route path="*" element={<Home/>}/>                    
                    <Route path="/Cart" element={<Cart all={dario} upDate={hundleDelete}/>}/>
                </Route>                
            </Routes>
        </BrowserRouter>
    );
}
export default RouteSwicth;