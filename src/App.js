import React, { useContext, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Recipes } from "./pages/Recipes";
import Login from "pages/Login";
import Register from "pages/Register";
import PostRecipe from "pages/PostRecipe";
import Account from "pages/Account";


export const LoggedInContext = React.createContext({
  isLoggedIn: null,
  setIsLoggedIn: () => {},
});

export const ThemeContext = React.createContext({
  theme: null,
  setTheme: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn]; // So we can pass down both value and setter

  const [theme, setTheme] = useState("light");
  const themeValue = [theme, setTheme];

  return (
    <ThemeContext.Provider value={themeValue} >
        <LoggedInContext.Provider value={loggedInValueToProvide}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {isLoggedIn ? <Route index element={<Home />} /> : ""}
              <Route path="about" element={<About />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="postRecipe" element={<PostRecipe />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="account/" element={<Account />} />
              <Route path="*" element={<Navigate to="/" Invalid URL />} />
            </Route>
          </Routes>
        </LoggedInContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
