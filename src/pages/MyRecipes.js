import React from "react";
import { useContext, useState } from "react";
import "../components/RecipeCard.css";
import { RecipeData } from "../components/RecipeData";
import { ThemeContext } from "App";
import { LoggedInContext } from "../App";

export function MyRecipes() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div id={theme}>
      <br></br>
      <h1 style={{ textAlign: "center" }}>My Recipes</h1>;
      <div className="body">
        <div className="wrapper">
          <RecipeData username={isLoggedIn.username} />
        </div>
      </div>
    </div>
  );
}

export default MyRecipes;
