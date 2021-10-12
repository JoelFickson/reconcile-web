import React from "react";
import {Link} from "react-router-dom";

const NavBar: React.FC = () => {
    return <nav className="navbar navbar-expand-lg shadow-sm p-2 navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand text-primary" to="/">Tutuka Reconciliation</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">

                        <Link className="nav-link active" to='/'>Home</Link>
                    </li>


                </ul>

            </div>
        </div>
    </nav>

}

export default NavBar;