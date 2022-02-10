import { Outlet, Link } from "react-router-dom";
import "../css/menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "../css/menu.css";
import logoSrc from "../img/site-logo.svg";
const Layout = ()=>{
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logoSrc} width="60px" height="60px" alt=""/>
                </Link>
                <Link to="/Cart" className="navbar-brand">
                    <div className="bag">
                       <h5 className="ty">0</h5>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Services">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
        </header>
       
    );
}
export default Layout;