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

export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn]; // So we can pass down both value and setter

  return (
    <div>
      <LoggedInContext.Provider value={loggedInValueToProvide}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {isLoggedIn ? (
              <Route index element={<Home />} />
            ) : (
              <Route index element={<LoginForm />} />
            )}
            <Route path="about" element={<About />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="recipeDetails" element={<RecipeDetails />} />
            <Route path="postRecipe" element={<PostRecipe />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<Navigate to="/" Invalid URL />} />
        </Routes>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
