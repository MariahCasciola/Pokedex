import React, { useEffect, useState } from "react";

function Pokedex() {
  const [pokemon, setPokemon] = useState();

  //keeps track of side effects like api calls
  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`, {
      signal: abortController.signal,
    });
  }, []);

  return <div></div>;
}

export default Pokedex;
