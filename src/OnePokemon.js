import { useState, useEffect } from "react";
import "./styling/OnePokemon.scss";
import "./styling/global.css";
import { extractColors } from "extract-colors";

function OnePokemon({ pokemon }) {
  // const [stats, setStats] = useState([]);
  const [sprite, setSprite] = useState("");
  const [hex, setHex] = useState([]);

  //searchResults is an array full of objects with keys pokemon names and their urls
  const fetchThisPokemon = () => {
    //fetches sprites of pokemon
    async function apiCall() {
      const abortController = new AbortController();
      try {
        const response = await fetch(`${pokemon.url}`, {
          signal: abortController.signal,
        });
        const pokemonObject = await response.json();
        setSprite(pokemonObject.sprites.front_default);
        // setStats(pokemonObject.stats);
      } catch {
        throw console.log("error");
      }
    }
    apiCall();
  };

  useEffect(() => {
    fetchThisPokemon();
  }, [pokemon]);

  // extracts colors from sprite and places them in an array of hex code strings
  const handleColorExtraction = async (sprite) => {
    if (!sprite) return;
    // extractColors arguments: src, options
    const options = {
      crossOrigin: "Anonymous",
    };

    try {
      const response = await extractColors(sprite, options);
      const results = response.map((colorObj) => {
        return colorObj.hex;
      });
      setHex(results);
    } catch (error) {
      throw console.log("error");
    }
  };

  const palleteSwap = async (elem) => {
    console.log("sprite", sprite);
    console.log("hex", hex);
    if (hex.length !== 0) {
      elem.style.setProperty("--primary-one", hex[0]);
      elem.style.setProperty("--secondary-one", hex[1]);
      elem.style.setProperty("--secondary-two", hex[2]);
      elem.style.setProperty("--accent-one", hex[3]);
      elem.style.setProperty("--accent-two", hex[4]);
    }
  };

  const clickHandler = async () => {
    // on click we want to change the color pallete of the :root
    const elem = document.querySelector(":root");
    await handleColorExtraction(sprite);
    const confirm = await window.confirm(
      "Change the color palette of the webpage?"
    );
    if (confirm) {
       await palleteSwap(elem);
    }
  };

  return (
    <div
      id="pokemon-card"
      onClick={() => clickHandler()}
      className="pokemon-card"
    >
      <img id="image" src={sprite} alt={pokemon.name} className="sprite" />
      <p className="pokemon-name">{pokemon.name}</p>
      <div className="pokemon-stat-container"></div>
    </div>
  );
}

export default OnePokemon;
