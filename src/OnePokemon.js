import { useState, useEffect } from "react";
import PokemonStats from "./PokemonStats";
import "./styling/OnePokemon.scss";

function OnePokemon({ pokemon }) {
  const [stats, setStats] = useState([]);
  const [sprite, setSprite] = useState("");

  //searchResults is an array full of matching pokemon and their urls
  //loop through, compare element.name to values??

  const fetchThisPokemon = () => {
    // make the api call to list pokemon
    async function apiCall() {
      const abortController = new AbortController();
      try {
        const response = await fetch(`${pokemon.url}`, {
          signal: abortController.signal,
        });
        const pokemonObject = await response.json();
        setSprite(pokemonObject.sprites.front_default);
        setStats(pokemonObject.stats);
      } catch {
        throw console.log("error");
      }
    }
    apiCall();
  };

  useEffect(() => {
    fetchThisPokemon();
  }, [pokemon]);

  return (
    <div className="pokemon-card">
      <img src={sprite} alt={`${pokemon.name} image`} className="sprite" />
      <p className="pokemon-name">{pokemon.name}</p>
      <div className="pokemon-stat-container">
        <PokemonStats stats={stats} />
      </div>
    </div>
  );
}

export default OnePokemon;
