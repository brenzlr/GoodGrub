import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Recipes } from "./pages/Recipes";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import Login from "pages/Login";
import Register from "pages/Register";
import RecipeDetails from "pages/RecipeDetails";
import PostRecipe from "pages/PostRecipe";
import { LogoutButton } from "components/LogoutButton";
import Account from "pages/Account";
import Switch from "react-switch"


export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const ThemeContext = React.createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn]; // So we can pass down both value and setter
  
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => { setTheme((curr) => (curr === "light" ? "dark" : "light")); };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
      <div id={theme}>
        <LoggedInContext.Provider value={loggedInValueToProvide}>
          <Switch onChange={toggleTheme} checked={theme === "dark"} className="switch" />
          <Routes>
            <Route path="/" element={<MainLayout color={theme} />}>
              {isLoggedIn ? <Route index element={<Home />} /> : ""}
              <Route path="about" element={<About />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="recipeDetails" element={<RecipeDetails />} />
              <Route path="postRecipe" element={<PostRecipe />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="account/" element={<Account />} />
              <Route path="*" element={<Navigate to="/" Invalid URL />} />
            </Route>
          </Routes>
        </LoggedInContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
