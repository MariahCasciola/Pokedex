import React, { useState, useEffect } from "react";

function OnePokemon({ pokemon }) {
  const [pokemonStats, setPokemonStats] = useState();

  const clickHandler = ({ target }) => {
    console.log(pokemonStats);
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
  }, []);

  return <li onClick={clickHandler}> {pokemon.name} </li>;
}

export default OnePokemon;
