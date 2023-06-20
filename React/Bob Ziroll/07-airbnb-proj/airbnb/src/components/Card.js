import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)


export default function Card() {
    return (
        <div className="card border-0">
            <img className="card--image" src={require("../images/wedding.jpg")} alt="wedding"/>
            <div className="card--stats">
                <FontAwesomeIcon className="card--star" icon="fa-solid fa-star" style={{color: "#ff0000",}} />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p className="mb-2 mt-2">Learn wedding photography</p>
            <span><b>From $125</b> / person</span>
        </div>
    );
}