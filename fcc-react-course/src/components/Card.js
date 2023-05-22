import React from "react"
import star from "../assets/star.png"
import me from "../assets/me.jpg"

export default function Card() {
    return (
        <>
            <div className="card">
                <img className="card--image" src={me}></img>
                <div className="card--stats">
                    <img className="card--star" src={star}></img>
                    <p>Rating 5.0</p>
                    <p>Review Count (6)</p>
                    <span className="bold gray">USA</span>
                </div>
                <h1 className="card--title">Person Name</h1>
                <div className="card--info">
                    <h3>Life Lessons with Katie Zaferes</h3>
                    <p>Person Information: from <span className="bold">$136</span> / person</p>
                </div>
            </div>
        </>
    )
}

