import React, { useRef } from "react";
import { useFetch } from "hooks/useFetch";
import { useNavigate } from "react-router-dom";

function SearchBar(props) {
  const query = useRef();
  const navigate = useNavigate();


  const handleSearch = (event) => {
    event.preventDefault(); // prevent page reload
    const queryVal = query.current.value;

    console.log(`http://localhost:3001/searchRecipe?search=${queryVal}`);
    // to fill in based on callPostBody

  /*    const [recipeData] = useFetch(
      "http://localhost:3001/myrecipes/searchRecipe?search=" + queryVal,
      "GET"
    ); */


  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        id="search"
        ref={query}
        placeholder="Search Recipes"
        name="resRecipe"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
