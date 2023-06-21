import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)


export default function Card({image, stars, reviewCount, country, experience, price}) {
    return (
        <div className="card border-0">
            <img className="card--image" src={require(`../images/${image}`)} alt="wedding"/>
            <div className="card--stats">
                <FontAwesomeIcon className="card--star" icon="fa-solid fa-star" style={{color: "#ff0000",}} />
                <span>{stars}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{country}</span>
            </div>
            <p className="mb-1 mt-1">{experience}</p>
            <span><b>From ${price}</b> / person</span>
        </div>
    );
}