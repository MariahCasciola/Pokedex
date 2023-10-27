import React from "react";
import "./styling/Pokedex.css";
import OnePokemon from "./OnePokemon";

function Pokedex({ searchResults}) {
  return (
    <div className="cards-container">
      {searchResults.map((pokemon, index) => {
        return (
          <OnePokemon
            pokemon={pokemon}
            searchResults={searchResults}
          />
        );
      })}
    </div>
  );
}

export default Pokedex;
