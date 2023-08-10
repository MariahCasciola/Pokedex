import React, { useState, useEffect } from "react";
import PokemonStats from "./PokemonStats";
import "./styling/OnePokemon.scss";

function OnePokemon({ pokemon }) {
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchThisPokemonStats() {
      try {
        const response = await fetch(pokemon.url, {
          signal: abortController.signal,
        });
        const pokemonInfo = await response.json();
        setPokemonStats(pokemonInfo.stats);
        setPokemonSprite(pokemonInfo.sprites.front_default);
      } catch {
        throw console.error("error");
      }
    }
    fetchThisPokemonStats();
  }, [pokemon]);

  return (
    <div className="pokemon-card">
      <img src={pokemonSprite} alt={pokemon.name} className="sprite" />
      <p> {pokemon.name}</p>
      <div className="pokemon-stat-container">
        <PokemonStats stats={pokemonStats} />
      </div>
    </div>
  );
}

export default OnePokemon;
