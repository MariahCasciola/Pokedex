import React from "react";
import "./styling/global.css"

function PokemonStats({ stats }) {
  return (
    <div>
      {stats.map(({ stat, base_stat }, index) => {
        return (
          <p key={index} className="pokemon-stat">
            {stat.name} : {base_stat}
          </p>
        );
      })}
    </div>
  );
}

export default PokemonStats;
