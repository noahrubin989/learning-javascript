import React from "react";

export default function Footer() {
    return (
        <div className="card-footer text-light text-center">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={require('../img/icons/linkedin.png')} alt="linkedin"/></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><img src={require('../img/icons/square-github.png')} alt="github"/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={require('../img/icons/square-instagram.png')} alt="instagram"/></a>
            <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><img src={require('../img/icons/square-twitter.png')} alt="twitter"/></a>
        </div>
    ) 
}


