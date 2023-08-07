import React, { useEffect, useState } from "react";
import OnePokemon from "./OnePokemon";
import "./styling/OnePokemon.css"

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(() => {
    const abortController = new AbortController();

    async function apiCall() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`,
          { signal: abortController.signal }
        );
        const pokemonList = await response.json();
        setPokemonList(pokemonList.results);
        // console.log(pokemonList.results);
      } catch {
        throw console.log("error");
      }
    }
    apiCall();
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon, index) => {
        // console.log(pokemon)
        return <OnePokemon key={index} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default Pokedex;
