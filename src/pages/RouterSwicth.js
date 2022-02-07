import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import NoPage from "./NoPage";
import Layout from "./Layout";
const RouteSwicth = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/Services" element={<Services/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
}
export default RouteSwicth;