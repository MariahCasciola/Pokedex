import React from "react";
import "./styling/Pokedex.css";
import "./styling/global.css";
import OnePokemon from "./OnePokemon";

function Pokedex({ searchResults }) {
  return (
    <div className="cards-container">
      {searchResults.map((pokemon, index) => {
        return (
          <OnePokemon
            pokemon={pokemon}
            index={index}
            searchResults={searchResults}
          />
        );
      })}
    </div>
  );
}

export default Pokedex;
