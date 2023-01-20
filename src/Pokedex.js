import React, { useEffect, useState } from "react";
import OnePokemon from "./OnePokemon";

function Pokedex() {
  //IMPORTANT PART (2) ***************************************
  const [pokemonList, setPokemonList] = useState([]);
  // console.log(pokemon)
  //keeps track of side effects like api calls
  useEffect(() => {
    const abortController = new AbortController();

    async function fetchFirstTenPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`,
          { signal: abortController.signal }
        );
        //IMPORTANT PART (1) ***************************************
        const pokemonList = await response.json();
        setPokemonList(pokemonList.results);
        // console.log(pokemonList.results);
      } catch {
        throw console.log("error");
      }
    }
    fetchFirstTenPokemon();
  }, []);

  return (
    <ul>
      {pokemonList.map((pokemon, index) => {
        // console.log(pokemon)
        return <OnePokemon key={index} pokemon={pokemon} />;
      })}
    </ul>
  );
}

export default Pokedex;
