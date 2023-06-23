import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)


export default function Card({image, stars, reviewCount, country, experience, price, openSpots}) {
    let badgeText = null;
    let badgeClassName = "card--badge";
    let badgeBackgroundColor = "";
    let badgeTextColor = "";

    if (openSpots === 0) {
        badgeText = "Sold Out";
        badgeClassName += " sold-out";
        badgeBackgroundColor = "red";
        badgeTextColor = "white";
    } else if (openSpots >= 1 && openSpots <= 10) {
        badgeText = "Selling Fast";
        badgeClassName += " selling-fast";
        badgeBackgroundColor = "yellow";
        badgeTextColor = "black";
    } else {
        badgeText = "Available";
        badgeClassName += " available";
        badgeBackgroundColor = "#046307";
        badgeTextColor = "white";
    }

    const badgeStyle = {
        backgroundColor: badgeBackgroundColor,
        color: badgeTextColor,
    };
    
    return (
        <div className="content">
            <div className="card border-0">
                <div className="card--image-wrapper">
                    <img className="card--image" src={require(`../images/${image}`)} alt="wedding"/>
                    {badgeText && <span className={badgeClassName} style={badgeStyle}>{badgeText}</span>}
                </div>
                <div className="card--stats">
                    <FontAwesomeIcon className="card--star" icon="fa-solid fa-star" style={{color: "#ff0000"}} />
                    <span>{stars}</span>
                    <span className="gray">({reviewCount}) • </span>
                    <span className="gray">{country}</span>
                </div>
                <p className="card--experience-text mb-1 mt-1">{experience}</p>
                <span className="card--experience-price"><b>From ${price}</b> / person</span>
            </div>   
        </div>
    );
}