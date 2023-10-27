import React, { useState } from "react";
import "../styling/Form.css";

function SearchForm({ setResults}) {
  const [name, setName] = useState("");

  // returns an array of objects with name matches and partial name matches
  const listFetcher = (value) => {
    const abortController = new AbortController();
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`, {
      signal: abortController.signal,
    }).then((response) =>
      response.json().then((json) => {
        const searchResults = json.results.filter((pokemon) => {
          return (
            value &&
            pokemon &&
            pokemon.name &&
            pokemon.name.toLowerCase().includes(value)
          );
        });
        setResults(searchResults);
      })
    );
  };

  // keeps track of any change in the form
  const changeHandler = (event) => {
    const { value } = event.target;
    setName(value);
    listFetcher(value.toLowerCase());
  };

  return (
    <>
      <form className="display-center">
        <label htmlFor="search"></label>
        <input
          id="search"
          name="search"
          onChange={changeHandler}
          value={name}
        ></input>
        {/* <button className="button" onClick={submitHandler}>
          Search
        </button> */}
      </form>
    </>
  );
}

export default SearchForm;
