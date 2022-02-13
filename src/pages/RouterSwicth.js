import React, {useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Layout from "./Layout";
import { colections, redDress, blackStyle } from "../components/Datta";
import Cart from "../components/Cart";

const RouteSwicth = () =>{
    const products = [];
    const upDateCart = (childDatta, index) =>{
        if(childDatta.qtd === 1){
          products.push(childDatta);  
        }else{
            products[index].qtd = childDatta.qtd;
        }
        
    }
    const upDateQtd = (childDatta, index) =>{
        products[index].qtd = childDatta;  
        console.log(products[index].qtd) 
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout nItem={products.length}/>}>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/Services" element={<Services redDress={redDress} blackStyle={blackStyle} colections={colections} upDateProd={upDateCart}/>}/>
                    <Route path="*" element={<Home/>}/>
                    <Route path="/Cart" element={<Cart allProducts={products} upDate={upDateQtd}/>}/>
                </Route>                
            </Routes>
        </BrowserRouter>
    );
}
export default RouteSwicth;