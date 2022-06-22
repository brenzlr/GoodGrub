import React from "react";
import { useContext } from "react";
import "../components/RecipeCard.css";
import { ThemeContext } from "App";
import { LoggedInContext } from "../App";
import { useFetch } from "hooks/useFetch";
import RecipeCard from "components/RecipeCard";

export function MyRecipes() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const [recipeData] = useFetch(
    "http://localhost:3001/myrecipes/" + isLoggedIn,
    "GET"
  );

  console.log(recipeData);

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
    <div id={theme}>
      <br></br>
      <h1 style={{ textAlign: "center" }}>My Recipes</h1>;
      <div className="body">
        <div className="wrapper">{recipeList}</div>
      </div>
    </div>
  );
}

export default MyRecipes;
