import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)

export default function Card() {
    return (
        <div className="card">
            <div className="card-header">
                Student Card
            </div>
            <div className="card-body">
                <div className="card-title-container d-flex align-items-baseline">
                    <h5 className="card-name">John Doe</h5>
                    <FontAwesomeIcon className="brand-icon" icon="fa-solid fa-star" style={{color: "gray"}} />
                </div>
                <div>
                    <p className="card-email text-secondary mb-2">johndoe@example.com</p>
                    <p className="card-phone mb-2">+1 (719) 555-1212</p>
                    <a href="https://github.com/noahrubin989" className="btn btn-success">See Projects</a>
                </div>
                
            </div>
        </div>
    );
}

