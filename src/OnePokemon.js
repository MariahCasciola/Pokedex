import { useState, useEffect } from "react";
// import PokemonStats from "./PokemonStats";
import "./styling/OnePokemon.scss";
import "./styling/global.css";
import { extractColors } from "extract-colors";

function OnePokemon({ pokemon, index }) {
  const [stats, setStats] = useState([]);
  const [sprite, setSprite] = useState("");
  const [pallete, setPallete] = useState([]);

  //searchResults is an array full of objects with keys pokemon names and their urls

  const fetchThisPokemon = () => {
    //fetches sprites and stats of pokemon
    async function apiCall() {
      const abortController = new AbortController();
      try {
        const response = await fetch(`${pokemon.url}`, {
          signal: abortController.signal,
        });
        const pokemonObject = await response.json();
        setSprite(pokemonObject.sprites.front_default);
        console.log("sprite", sprite);
        setStats(pokemonObject.stats);
      } catch {
        throw console.log("error");
      }
    }
    apiCall();
  };

  // useCallback()
  useEffect(() => {
    fetchThisPokemon();
  }, [pokemon]);

  const handleColorEx = (sprite) => {
    const src = sprite;
    const colorArray = extractColors(src)
      .then(colorArray)
      .catch(console.error("Error"));
  };

  const clickHandler = () => {
    // on click we want to change the color pallete of the :root
    var elem, style;
    elem = document.querySelector(":root");
    style = getComputedStyle(elem);
    // alert the value
    alert("Change the color palette of the webpage?");
    elem.style.setProperty("--primary-one", "black");
    elem.style.setProperty("--secondary-one", "black");
    elem.style.setProperty("--secondary-two", "black");
    elem.style.setProperty("--accent-one", "black");
    elem.style.setProperty("--accent-two", "black");
  };

  return (
    <div id="pokemon-card" onClick={clickHandler} className="pokemon-card">
      <img src={sprite} alt={pokemon.name} className="sprite" />
      <p className="pokemon-name">{pokemon.name}</p>
      <div className="pokemon-stat-container">
        {/* <PokemonStats stats={stats} /> */}
      </div>
    </div>
  );
}

export default OnePokemon;
