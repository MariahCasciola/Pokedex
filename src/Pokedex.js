import React, { useState, useEffect } from "react";
import "./styling/Pokedex.css";
import "./styling/global.css";
import OnePokemon from "./OnePokemon";
import { extractColors } from "extract-colors";

function Pokedex({ searchResults }) {
  // default webpage colors
  const defaultPalette = [
    "#2d3142",
    "#4a9cef",
    "#e6e69c",
    "#c0c0c0",
    "#de4242",
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
    await window.confirm("Change the color palette of the webpage?");
  };

  return (
    <div className="cards-container">
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
