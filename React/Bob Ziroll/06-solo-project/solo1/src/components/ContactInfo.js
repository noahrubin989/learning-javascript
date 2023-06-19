import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactInfo() {
    return (
        <div className="card--contact-info d-flex flex-row justify-content-center align-items-center">
            <button type="button" className="btn btn-light border d-flex align-items-center justify-content-center w-100">
                <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#001842",}} />
                <span>Email</span>
            </button>
        </div>
    ) 
}