import React from "react";
import MemesData from "./MemesData";

function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/16iyn1.jpg",
  });

  const [allMemes, setAllMemes] = React.useState(MemesData);

  function randomMeme() {
    const memeArray = allMemes.data.memes;
    const random = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[random].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: url,
      };
    });

    console.log(url);
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }

  return (
    <main>
      <div className="form">
        <label htmlFor="top">Top Text :</label>
        <label htmlFor="bottom">Bottom Text :</label>
        <input
          type="text"
          id="top"
          placeholder="Top Text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          id="bottom"
          placeholder="Bottom Text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="form-btn" onClick={randomMeme}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} className="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
export default Meme;
