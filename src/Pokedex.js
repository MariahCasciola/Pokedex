import React, { useEffect, useState } from "react";

function Pokedex() {
  //IMPORTANT PART (2) ***************************************
  const [pokemon, setPokemon] = useState([]);

  //keeps track of side effects like api calls
  useEffect(() => {
    const abortController = new AbortController();

    async function apiCall() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`,
          { signal: abortController.signal }
        );
        //IMPORTANT PART (1) ***************************************
        const pokemonList = await response.json();
        setPokemon(pokemonList.results);
        console.log(pokemonList.results);
      } catch {
        throw console.log("error");
      }
    }
    //do I need a parameter?
    apiCall();
  }, []);

  return <div></div>;
}

export default Pokedex;
