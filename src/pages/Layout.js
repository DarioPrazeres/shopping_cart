import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import logoSrc from "../img/site-logo.svg";
const Layout = ()=>{
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light">
                 <div className="container-fluid">
                    <Link to="/" className="navbar-brand justify-content-md-center">
                        <img src={logoSrc} width="60px" height="60px" alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                 </div>
                <div className="collapse navbar-collapse p-4" id="navbarCollapse">
                    <ul className="navbar-nav  me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Services">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                        </li>
                </ul>
                </div>
                
            </nav>
            <Outlet/>
        </header>
       
    );
}
export default Layout;