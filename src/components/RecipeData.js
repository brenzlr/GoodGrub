import React from "react";
import { useFetch } from "hooks/useFetch";
import RecipeCard from "./RecipeCard";

export function RecipeData() {
  const [recipeData] = useFetch("http://localhost:3001/recipes", "GET");

  const recipeList =
    recipeData &&
    recipeData.map((recipe) => (
      <div key={recipe.recipeName} >
        <RecipeCard title={recipe.recipeName} 
        description={recipe.recipeInstructions}
        ingredients={recipe.recipeIngredients}
        type={recipe.recipeType}
        date={recipe.dateCreated}/>
      </div>
    ));

  return (
    < >
      {recipeList}
    </>
  );
}
