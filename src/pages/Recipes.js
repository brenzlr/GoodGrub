import { useContext, useState } from "react";
import "../components/RecipeCard.css";
import { RecipeData } from "../components/RecipeData";
import { ThemeContext } from "App";
import SearchBar from "components/SearchBar";

export function Recipes(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
  ];

  const [wrap, setWrap] = useState("wrapper");
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div id={theme}>
      <br></br>
      <h1 style={{ textAlign: "center" }}> Browse Recipes </h1>;
      <div style={{ textAlign: "center" }}>
        {" "}
        <SearchBar />{" "}
      </div>
      ;
      <div className="body">
        <div className="wrapper">
          <RecipeData />
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Recipes;
