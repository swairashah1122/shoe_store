import React from 'react';
import "./Navbar.css";
import logo from '../../Images/logo.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Nike logo" width="100" height="50" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=' ms-auto mb-2 mb-lg-0'>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">PRODUCTS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;