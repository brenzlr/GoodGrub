import React, { useContext } from "react";
import { useFetch } from "hooks/useFetch";
import RecipeCard from "./RecipeCard";
import { SearchContext } from "App";

export function RecipeData(props) {

  const [isSearched, setIsSearched] = useContext(SearchContext);

  const [recipeData] = useFetch(isSearched?"http://localhost:3001/searchRecipe?search="+isSearched:"http://localhost:3001/recipes", "GET");

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
