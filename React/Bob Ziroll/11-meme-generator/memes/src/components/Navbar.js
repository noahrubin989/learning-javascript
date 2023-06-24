import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)

export default function Navbar(props) {
    return (
        <section>
            <header className="my-header">
                <nav className="navbar navbar-light bg-dark d-flex justify-content-start align-items-center">
                    <a className="navbar-brand" href="https://www.linkedin.com/in/noah-rubin1/">
                        <FontAwesomeIcon className="brand-icon" icon="fa-solid fa-star" style={{color: "white"}} />
                    </a>
                    <h3 className="mb-0 text-white">Meme Generator</h3>
                </nav>
            </header>  
        </section>
    )
}