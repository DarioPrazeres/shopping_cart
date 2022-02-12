import React, {useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Layout from "./Layout";
import { colections, redDress, blackStyle } from "../components/Datta";
import Cart from "../components/Cart";

const RouteSwicth = () =>{
    const [products, setProducts] = useState([]);
    const upDateCart = (childDatta) =>{
        setProducts(()=> products.concat(childDatta))
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout nItem={products.length}/>}>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/Services" element={<Services redDress={redDress} blackStyle={blackStyle} colections={colections} upDate={upDateCart}/>}/>
                    <Route path="*" element={<Home/>}/>
                    <Route path="/Cart" element={<Cart allProducts={products}/>}/>
                </Route>                
            </Routes>
        </BrowserRouter>
    );
}
export default RouteSwicth;