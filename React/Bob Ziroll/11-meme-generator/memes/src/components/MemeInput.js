import React, { useState } from 'react';
import memesData from "../data/memesData";

const MemeInput = (props) => {

    let [url, setUrl] = useState('');

    function getImg() {
        setUrl(()=>{
            const memesArray = memesData.data.memes;
            const randomNum = Math.floor(Math.random()*memesArray.length);
            return memesArray[randomNum].url;
        })
    }
    

    return (
        <section className="meme-generation-container">
            <form className="my-form">
                <input type="text" className="top-text" placeholder="top-text"/>
                <input type="text" className="bottom-text" placeholder="bottom-text"/>
            </form>
            <div className="d-grid">
                <button onClick={getImg} className="btn btn-dark" type="button">Get a new meme image</button>
            </div>
            <img className="meme-image" src={url} alt="meme"/>
        </section>
    );
}

export default MemeInput;