// import React, { useState } from "react";
import React from "react";
import memesData from "../data/memesData";

const MemeInput = (props) => {

    function handleClick() {
        let memesArray = memesData.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(memesArray[randomNumber].url);
    }

    return (
        <section className="meme-generation-container">
            <form className="my-form">
                <input type="text" className="top-text" placeholder="top-text"/>
                <input type="text" className="bottom-text" placeholder="bottom-text"/>
            </form>
            <div className="d-grid">
                <button onClick={handleClick} className="btn btn-dark" type="button">Get a new meme image</button>
            </div>
        </section>
    );
}

export default MemeInput;