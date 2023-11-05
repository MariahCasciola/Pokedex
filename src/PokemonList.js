import React, { useState, useEffect } from "react";
import "./styling/PokemonList.css";
import "./styling/global.css";
import OnePokemon from "./OnePokemon";
import { extractColors } from "extract-colors";

function Pokedex({ searchResults }) {
  // default webpage colors
  const defaultPalette = [
    "#2D3047",
    "#93B7BE",
    "#E0CA3C",
    "#A799B7",
    "#048A81",
  ];

  const [hex, setHex] = useState(defaultPalette);

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

  //sets 5 global variables in global.css to the colors in hex array
  const palleteSwap = async (elem) => {
    elem.style.setProperty("--primary-one", hex[0]);
    elem.style.setProperty("--secondary-one", hex[1]);
    elem.style.setProperty("--secondary-two", hex[2]);
    elem.style.setProperty("--accent-one", hex[3]);
    elem.style.setProperty("--accent-two", hex[4]);
  };

  //assures that the hex code array is loaded in time to be used in palleteSwap, and selects the :root for palleteSwap to take as a parameter
  useEffect(() => {
    if (hex.length !== 0) {
      const elem = document.querySelector(":root");
      palleteSwap(elem);
    }
  }, [hex]);

  // on click, window confirms the color pallete
  const clickHandler = async (sprite) => {
    await handleColorExtraction(sprite);
  };

  return (
    <div className="grid">
      {searchResults.map((pokemon, index) => {
        return (
          <OnePokemon
            pokemon={pokemon}
            key={index}
            searchResults={searchResults}
            clickHandler={clickHandler}
          />
        );
      })}
    </div>
  );
}

export default Pokedex;
