import React from "react";
import modular from "../assets/modular.jpg";

function Hero () {
    return (
        <section className="hero">
                <img src={modular} alt="modular hero" className="hero--photo"></img>
                <h1 className="hero--header">Intro</h1>
                <p className="hero--text">Eu voluptate veniam exercitation dolore fugiat fugiat ut mollit pariatur cupidatat eiusmod anim ullamco consectetur. Sint excepteur et cupidatat eiusmod eu magna minim duis mollit.</p>
        </section>
    )
};

export default Hero;
