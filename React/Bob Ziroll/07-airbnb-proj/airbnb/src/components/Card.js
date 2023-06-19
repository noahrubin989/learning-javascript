import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card() {
    return (
        <section className="experience--instance d-flex flex-column">
            <div className="experience--image-container"><img src={require("../images/wedding.jpg")} alt="wedding"/></div>
            <div className="experience--reviews-container d-flex flex-row">
                {/* <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ff0000",}} /> */}
                <p>5.0</p>
                <p>(5)-USA</p>
            </div>
            <div>
                <p>Learn wedding photography</p>
                <p><b>From $125</b> / person</p>
            </div>
        </section>
    )
}

// Todo
// Import font awesome icon