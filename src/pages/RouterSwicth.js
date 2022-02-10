import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Layout from "./Layout";
import { colections, redDress, blackStyle } from "../components/Datta";
const RouteSwicth = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/Services" element={<Services redDress={redDress} blackStyle={blackStyle} colections={colections}/>}/>
                    <Route path="*" element={<Home/>}/>
                </Route>                
            </Routes>
        </BrowserRouter>
    );
}
export default RouteSwicth;