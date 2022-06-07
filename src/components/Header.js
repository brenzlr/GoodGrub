import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import "../components/Header.css";
import { NavButton } from "../components/NavButton";

export function Header() {
  return (
    <div>
      <div>
        <HomeButton />
      </div>
      <div>
        <NavButton to="/" label="Home" />
        <NavButton to="/about" label="About" />
        <NavButton to="/contact" label="Contact" />
      </div>
    </div>
  );
}

export default Header;
