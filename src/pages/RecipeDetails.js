import React from "react";

//I think we need to send a fetch request in the RecipeCard.js button with id and have the url reflect that /recipeDetails/1

export function RecipeDetails(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <h1>title here{props.title}</h1>
      <div>img here{props.img}</div>
      <div>rating here{props.rating}</div>
      <p>description{props.description}</p>
      <p>instructions</p>
      <p>recipe by username on creationDate</p>
    </div>
  );
}

export default RecipeDetails;
