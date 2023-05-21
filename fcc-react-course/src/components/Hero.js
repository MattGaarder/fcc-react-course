import React from "react";
import "./Hero.css";
import modular from "../assets/modular.jpg";

function Hero () {
    return (
        <div className="container">
            <div className="nav-container">
                <img src={modular} alt="modular hero" className="hero"></img>
            </div>
        </div>
    )
};

export default Hero;
