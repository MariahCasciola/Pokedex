import React from "react";

function PokemonStats({ stats }) {
  return (
    <div>
      {stats.map(({ stat, base_stat }) => {
        console.log(stat);
        return <p> {stat.name} : {base_stat}</p>;
      })}
    </div>
  );
}

export default PokemonStats;
