import React, { useState } from 'react';
import memesData from "../data/memesData";

const MemeInput = (props) => {

    function handleClick() {
        let memesArray = memesData.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(memesArray[randomNumber].url);
    }

    const [thingsArray, setThingsArray] = useState(['Thing 1', 'Thing 2']);

    function addThing() {
        setThingsArray(prevArray => [...prevArray, `Thing ${prevArray.length + 1}`]);
    }
    const pElements = thingsArray.map(
        (item, index)=>{
            return <p key={index}>{item}</p>;
        }
    )

    return (
        <section className="meme-generation-container">
            <form className="my-form">
                <input type="text" className="top-text" placeholder="top-text"/>
                <input type="text" className="bottom-text" placeholder="bottom-text"/>
            </form>
            <div className="d-grid">
                <button onClick={handleClick} className="btn btn-dark" type="button">Get a new meme image</button>
            </div>
            <div>
                <button onClick={addThing} className="btn btn-dark" type="button">
                    Add item
                </button>
                {pElements}
            </div>
        </section>
    );
}

export default MemeInput;