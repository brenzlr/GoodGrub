import React from "react";
import { useFetch } from "hooks/useFetch";
import RecipeCard from "./RecipeCard";

export function RecipeData({username}) {
  const [recipeData] = useFetch(username?"http://localhost:3001/recipes/"+username:"http://localhost:3001/recipes", "GET");

  const recipeList =
    recipeData &&
    recipeData.map((recipe) => (
      <div key={recipe.recipeName} >
        <RecipeCard title={recipe.recipeName} 
        imgUrl={recipe.imgUrl}
        description={recipe.recipeInstructions}
        ingredients={recipe.recipeIngredients}
        type={recipe.recipeType}
        duration={recipe.recipeDuration}/>
      </div>
    ));

  return (
    < >
      {recipeList}
    </>
  );
}
