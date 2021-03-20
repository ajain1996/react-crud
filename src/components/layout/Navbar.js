import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        // <!-- Header -->
        <header className="">
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <NavLink className="navbar-brand" exact to="/">
                        <h2>Host <em>Cloud</em></h2>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/users">
                                    Users
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="functional-buttons">
                        <ul>
                            <li><NavLink exact to="#">Log in</NavLink></li>
                            <li><NavLink exact to="#">Sign Up</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
