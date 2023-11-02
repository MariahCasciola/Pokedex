import React, { useState } from "react";
import "../styling/Form.css";
import "../styling/global.css"

function SearchForm({ setResults }) {
  const [name, setName] = useState("");

  // returns an array of objects with name matches and partial name matches results/searchResults and setResults is drilled from
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
        // console.log("searchResults", searchResults);
        setResults(searchResults);
      })
    );
  };

  // keeps track of any change in the form
  const changeHandler = (event) => {
    const { value } = event.target;
    setName(value);
    // replace.() chain replaces all spaces with - to account for pokemon names such as gengar-mega
    listFetcher(value.toLowerCase().replace(/\s+/g, "-"));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setName("")
  };

  return (
    <>
      <form onSubmit={submitHandler} className="display-center">
        <label htmlFor="search"></label>
        <input
          id="search"
          name="search"
          onChange={changeHandler}
          value={name}
          placeholder="Search for a Pokemon"
        ></input>
        <button type="submit" className="button">Search</button>
      </form>
    </>
  );
}

export default SearchForm;
