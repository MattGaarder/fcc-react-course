import React from "react";
import logo from "../assets/logo.jpg";

function NavBar () {
    return (
        <div className="container">
            <div className="nav-container">
                <img src={logo} alt="company logo" className="logo"></img>
                <div className="nav-items">
                    <h3>About</h3>
                    <h3>Experiences</h3>
                    <h3>Menu</h3>
                </div>
            </div>
        </div>
    )
};

export default NavBar;

