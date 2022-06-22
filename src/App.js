import React, { useContext, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About";
import { Recipes } from "./pages/Recipes";
import Login from "pages/Login";
import Register from "pages/Register";
import PostRecipe from "pages/PostRecipe";
import MyRecipes from "pages/MyRecipes";
import MyFavorites from "pages/MyFavorites";

export const LoggedInContext = React.createContext({
  isLoggedIn: null,
  setIsLoggedIn: () => {},
});

export const ThemeContext = React.createContext({
  theme: null,
  setTheme: () => {},
});

export const SearchContext = React.createContext({
  isSearched: null,
  setIsSearched: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn]; // So we can pass down both value and setter

  const [theme, setTheme] = useState("light");
  const themeValue = [theme, setTheme];

  const [isSearched, setIsSearched] = useState(null);
  const searchValue = [isSearched, setIsSearched];

  return (
    <ThemeContext.Provider value={themeValue}>
      <LoggedInContext.Provider value={loggedInValueToProvide}>
        <SearchContext.Provider value={searchValue}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Recipes />} /> 
              <Route path="about" element={<About />} />
              <Route path="postRecipe" element={<PostRecipe />} />
              <Route path="myRecipes" element={<MyRecipes />} />
              <Route path="myFavorites" element={<MyFavorites />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" Invalid URL />} />
            </Route>
          </Routes>
        </SearchContext.Provider>
      </LoggedInContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
