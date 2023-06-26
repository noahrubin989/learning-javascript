import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar)

export default function Card() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "johndoe@example.com",
        isFavourite: false
    });

    const toggleFavourite = () => {
        setContact(
            (prevContact) => {
                return {
                    ...prevContact, isFavourite: !prevContact.isFavourite
                }
            }
        );
    };


    return (
        <div className="card">
            <div className="card-header">
                Student Card
            </div>
            <div className="card-body">
                <div className="card-title-container d-flex align-items-baseline">
                    <h5 className="card-name">{contact.firstName} {contact.lastName}</h5>
                    <FontAwesomeIcon 
                        // either className will be "brand-icon" or "brand-icon favourite" depending on the value of `contact.isFavourite`
                        className={`brand-icon ${contact.isFavourite===true ? "favourite" : ""}`}
                        icon="fa-solid fa-star" 
                        onClick={toggleFavourite}
                    />
                </div>
                <div>
                    <p className="card-email text-secondary mb-2">{contact.email}</p>
                    <p className="card-phone mb-2">{contact.phone}</p>
                    <a href="https://github.com/noahrubin989" className="btn btn-success">See Projects</a>
                </div>
            </div>
        </div>
    );
}

