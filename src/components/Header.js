import React from "react";
import "../components/Header.css";
import { NavButton } from "../components/NavButton";
import { LoggedInContext } from "../App";
import { useContext } from "react";
import { LogoutButton } from "../components/LogoutButton";


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
        <div style={{ display: "flex", flexDirection: "row" }}>
          {isLoggedIn ? (
            <LogoutButton />
          ) : (
            <>
              <NavButton to="/login" label="Login" />
              <NavButton to="/register" label="Register" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
