import React, { useContext, useRef } from "react";
import { SearchContext } from "App";

function SearchBar(props) {
  const query = useRef();
  const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001/";
  const [isSearched, setIsSearched] = useContext(SearchContext);

  const handleSearch = (event) => {
    event.preventDefault(); // prevent page reload
    const queryVal = query.current.value;

    console.log(url + `searchRecipe?search=${queryVal}`);

    setIsSearched(queryVal);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        id="search"
        ref={query}
        placeholder="Click to search all"
        name="resRecipe"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
