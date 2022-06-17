import React from "react";
import { useFetch } from "../hooks/useFetch";

export function PokeData() {
  const [pkmData] = useFetch("https://pokeapi.co/api/v2/pokemon/", "GET");

  const pkmList =
    pkmData &&
    pkmData.results &&
    pkmData.results.map((pokemon) => <li key={pokemon.name}>{Capitalize(pokemon.name)}</li>);

  return (
    <>
      <h1>Show all Pokemon</h1>
      <ul>{pkmList}</ul>
    </>
  );
}

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default PokeData;
