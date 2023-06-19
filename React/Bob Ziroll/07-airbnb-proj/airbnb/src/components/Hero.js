import React from "react"

export default function Hero() {
    return (
        <section className="hero">
            <div className="images-container">
                <div className="host--image-one"><img src={require("../images/forest.jpg")} alt="forest"/></div>
                <div className="host--image-two"><img src={require("../images/cottage.jpg")} alt="cottage"/></div>
                <div className="host--image-third"><img src={require("../images/inside-lounge.jpg")} alt="inside-lounge"/></div>
                <div className="host--image-fourth"><img src={require("../images/inside.jpg")} alt="inside"/></div>
            </div>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts all without leaving home</p>
        </section>
    )
}