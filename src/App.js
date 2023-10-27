import "./styling/App.css";
import React, { useState } from "react";
import Header from "./header/Header";
import SearchForm from "./search/SearchForm";
import Pokedex from "./Pokedex";

function App() {
  // create a use state for the pokemonlist
  const [results, setResults] = useState([]);

  return (
    <div>
      <Header />
      <SearchForm setResults={setResults} />
      <Pokedex
        searchResults={results}
      />
    </div>
  );
}

export default App;
