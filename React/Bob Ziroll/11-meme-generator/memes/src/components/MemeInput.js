import React, { useState } from "react";
import memesData from "../data/memesData";

const MemeInput = (props) => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const getMemeImage = () => {
    const memesArray = memesData.data.memes; // get the array with all of our meme info
    const randomNumber = Math.floor(Math.random() * memesArray.length); // random index
    const url = memesArray[randomNumber].url; // resulting url of arr[rand].url
    setMeme((prevObj) => {
      return {
        ...prevObj,
        randomImage: url,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevObj) => {
      return { ...prevObj, [name]: value };
    });
  };

  return (
    <section className="meme-generation-container">
      <form className="my-form">
        <input
          type="text"
          className="top-text"
          placeholder="top-text"
          name="topText"
          value={meme.topText}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          className="bottom-text"
          placeholder="bottom-text"
          name="bottomText"
          value={meme.bottomText}
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div className="d-grid">
        <button onClick={getMemeImage} className="btn btn-dark" type="button">
          Get a new meme image
        </button>
      </div>
      <div className="d-flex justify-content-center position-relative">
        <h3 className="image-top-text">{meme.topText}</h3>
        <img className="meme-image" src={meme.randomImage} alt="meme" />
        <h3 className="image-bottom-text">{meme.bottomText}</h3>
      </div>
    </section>
  );
};

export default MemeInput;
