import React from "react";

export default function CardIntro() {
    return (
        <div className="card--intro-info d-flex flex-column justify-content-center align-items-center">
            <h3 className="person-name text-light">Jane Doe</h3>
            <h6 className="person-title">Software Engineer</h6>
            <a className="person-link text-decoration-none" href="https://react.dev/" target="_blank" rel="noreferrer">My Website</a>
        </div>
    ) 
}