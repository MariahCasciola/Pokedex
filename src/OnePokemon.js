import React, { useState, useEffect } from "react";
import PokemonStats from "./PokemonStats";

function OnePokemon({ pokemon }) {
  const [pokemonStats, setPokemonStats] = useState([]);
  const [isClicked, setClicked] = useState(false);
  const [pokemonSprite, setPokemonSprite] = useState("");

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
        // console.log(pokemonInfo)
        setPokemonStats(pokemonInfo.stats);
        setPokemonSprite(pokemonInfo.sprites.front_default);
      } catch {
        throw console.error("error");
      }
    }
    fetchThisPokemonStats();
  }, [pokemon]);

  return isClicked ? (
    <div onClick={clickHandler}>
      {<PokemonStats stats={pokemonStats} />}
      <img src={pokemonSprite} alt={pokemon.name} />
    </div>
  ) : (
    <div onClick={clickHandler}>
      <p> {pokemon.name}</p>
      <img src={pokemonSprite} alt={pokemon.name} />
    </div>
  );
}

export default OnePokemon;
