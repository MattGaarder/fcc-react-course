import React from "react";
import whiskers from "../assets/whiskers.jpeg"



export default function Contact({name: funnycolon, phone, email}) {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={whiskers}/>
                <h3>{funnycolon}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}