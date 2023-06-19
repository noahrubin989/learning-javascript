import React from "react";

export default function Navbar() {
    return (
        <div className=".container-fluid">
            <nav className="navbar navbar-light bg-light border shadow d-flex">
                <a class="navbar-brand d-flex" href="https://www.airbnb.com.au/">
                    <img src={require("../images/logo.png")} class="nav--logo d-inline-block align-top" alt=""/>
                </a>
            </nav>
        </div>
    )
}