import React from "react";

export function RecipeDisplay(props) {
  <RecipeDetails />;
}

export function RecipeDetails(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <h1>title here{props.title}</h1>
      <div>img here{props.img}</div>
      <div>rating here{props.rating}</div>
      <p>description{props.description}</p>
    </div>
  );
}

export default RecipeDetails;
