import "./styling/App.css";
import "./styling/global.css";
import React, { useState } from "react";
import Header from "./headers/Header";
import SearchForm from "./search/SearchForm";
import Pokedex from "./Pokedex";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <Header />
      <p className="title">Results: {results.length}</p>
      <SearchForm setResults={setResults} />
      <Pokedex searchResults={results} />
    </div>
  );
}

export default App;
