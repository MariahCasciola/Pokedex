import React, { useState, useEffect } from "react";
import PokemonStats from "./PokemonStats";

function OnePokemon({ pokemon }) {
  const [pokemonStats, setPokemonStats] = useState([]);
  const [isClicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!isClicked);
  };

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchThisPokemonStats() {
      try {
        const response = await fetch(pokemon.url, {
          signal: abortController.signal,
        });
        //IMPORTANT PART (1) ***************************************
        const pokemonInfo = await response.json();
        setPokemonStats(pokemonInfo.stats);
      } catch {
        throw console.error("error");
      }
    }
    fetchThisPokemonStats();
  }, [pokemon]);

  return isClicked ? (
    <li onClick={clickHandler}> {<PokemonStats stats={pokemonStats} />} </li>
  ) : (
    <li onClick={clickHandler}> {pokemon.name} </li>
  );
}

export default OnePokemon;
