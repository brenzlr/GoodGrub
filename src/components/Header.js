import React from "react";
import "../components/Header.css";
import { NavButton } from "../components/NavButton";
import { LoggedInContext } from "../App";
import { useContext } from "react";
import { LogoutButton } from "../components/LogoutButton";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { Login } from "../pages/Login";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

  return (
    <div>
      <div>{isLoggedIn ? "Welcome" : "Please login"}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NavButton to="/" label="Home" />
          <NavButton to="/about" label="About" />
          <NavButton to="/contact" label="Contact" />
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          {isLoggedIn ? (
            <LogoutButton />
          ) : (
            <>
              <RegisterButton />
              <LoginButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
