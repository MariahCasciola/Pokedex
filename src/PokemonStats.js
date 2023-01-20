import React from "react";

function PokemonStats({ stats }) {
  return (
    <div>
      {stats.map(({ stat, base_stat}, index) => {
        return <p key={index} > {stat.name} : {base_stat}</p>;
      })}
    </div>
  );
}

export default PokemonStats;
