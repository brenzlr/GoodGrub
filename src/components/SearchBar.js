import React, { useContext, useRef } from "react";
import { useFetch } from "hooks/useFetch";
import Recipes from "pages/Recipes";
import { SearchContext } from "App";

function SearchBar(props) {
  const query = useRef();
  
  const [isSearched, setIsSearched] = useContext(SearchContext);

  const handleSearch = (event) => {
    event.preventDefault(); // prevent page reload
    const queryVal = query.current.value;

    console.log(`http://localhost:3001/searchRecipe?search=${queryVal}`);
    // to fill in based on callPostBody

  /*    const [recipeData] = useFetch(
      "http://localhost:3001/myrecipes/searchRecipe?search=" + queryVal,
      "GET"
    ); */

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
