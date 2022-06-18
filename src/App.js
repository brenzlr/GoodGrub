import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Recipe } from "./pages/Recipe";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import Login from "pages/Login";
import Register from "pages/Register";
import { LogoutButton } from "components/LogoutButton";

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
            <Route path="recipe" element={<Recipe />} />
            {isLoggedIn ? (
              <Route index element={<LogoutButton />} />
            ) : (
                <Route path="login" element={<LoginForm />} />  
            )}
            <Route path="register" element={<Register />} />  
          </Route>
          <Route path="*" element={<Navigate to="/" Invalid URL />} />
        </Routes>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
