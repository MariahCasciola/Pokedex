import { useState, useEffect } from "react";
import "./styling/OnePokemon.scss";
import "./styling/global.css";

function OnePokemon({ pokemon, clickHandler }) {
  const [sprite, setSprite] = useState("");

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
      } catch {
        throw console.log("error");
      }
    }
    apiCall();
  };

  useEffect(() => {
    fetchThisPokemon();
  }, [pokemon]);

  return !sprite ? null : (
    <div
      id="pokemon-card"
      onClick={() => clickHandler(sprite)}
      className="pokemon-card"
    >
      <img id="image" src={sprite} alt={pokemon.name} className="sprite" />
      <p className="pokemon-name">{pokemon.name}</p>
    </div>
  );
}

export default OnePokemon;
