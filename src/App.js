import "./styling/App.css";
import "./styling/global.css";
import React, { useState } from "react";
import Header from "./headers/Header";
import SearchForm from "./search/SearchForm";
import PokemonList from "./PokemonList";

function App() {
  //results is an array full of objects with the keys 'pokemon' and 'url'
  const [results, setResults] = useState([]);
  return (
    <div>
      <Header />
      <p className="title">Results: {results.length}</p>
      <SearchForm setResults={setResults} />
      <PokemonList searchResults={results} />
    </div>
  );
}

export default App;
