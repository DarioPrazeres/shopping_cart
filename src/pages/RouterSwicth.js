import React, {useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Layout from "./Layout";
import { colections, redDress, blackStyle } from "../components/Datta";
import Cart from "../components/Cart";

const RouteSwicth = () =>{
    const [products, setProducts] = useState([]);
    var dario =[];
    const upDateCart = (datta) =>{
        console.log("you are:")
        console.log(datta);
        dario=datta; 
        console.log("WE are:")
        console.log(dario); 
    }
    useEffect(()=>{
        console.log(dario.length)
   }, [dario]);
    const upDateQtd = (childDatta, index) =>{       
        products[index].qtd = childDatta;  
        console.log(products[index].qtd) 
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout nItem={dario.length}/>}>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/Services" element={<Services redDress={redDress} blackStyle={blackStyle} colections={colections} upDateProd={upDateCart}/>}/>
                    <Route path="*" element={<Home/>}/>
                    <Route path="/Cart" element={<Cart allProducts={dario} upDate={upDateQtd}/>}/>
                </Route>                
            </Routes>
        </BrowserRouter>
    );
}
export default RouteSwicth;