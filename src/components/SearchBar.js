import React, { useRef } from "react";

function SearchBar(props) {
  const query = useRef();

  const handleSearch = (event) => {
    event.preventDefault(); // prevent page reload
    const queryVal = query.current.value;

    console.log(`http://localhost:3001/recipes?search=${queryVal}`);
    // to fill in based on callPostBody
    fetch(`http://localhost:3001/recipes?search=${queryVal}`, { method: "GET" })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
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
