import React from "react";
import "../components/Header.css";
import { LoggedInContext, SearchContext, ThemeContext } from "../App";
import { useContext } from "react";
import { LogoutButton } from "../components/LogoutButton";
import logo from "../img/logo.png";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Switch from "react-switch";

export function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log({ theme });
  };

  return (
    <header id={theme}>
      <MDBNavbar expand="lg" light fixed className="head">
        <MDBContainer fluid>
          
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0 ">
              <MDBNavbarItem>
                <img src={logo} alt="logo" className="col-3"></img>
              </MDBNavbarItem>
              <MDBNavbarItem active className="offset-2">
                <MDBNavbarLink aria-current="page" href="/">
                  <Link to="/">Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/about">
                  <Link to="/about">About</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              {isLoggedIn ? (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/postRecipe">
                    <Link to="/postRecipe">Post a Recipe</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ) : (
                ""
              )}
              {isLoggedIn ? (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/myRecipes">
                    <Link to="/myRecipes">My Recipes</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ) : (
                ""
              )}
              {isLoggedIn ? (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/myFavorites">
                    <Link to="/myFavorites">My Favorites</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ) : (
                ""
              )}
              <MDBNavbarItem className="offset-2">
                {isLoggedIn ? <LogoutButton /> : ""}
              </MDBNavbarItem>
              <MDBNavbarItem className="offset-2">
                {isLoggedIn ? (
                  ""
                ) : (
                  <>
                    {" "}
                    <MDBNavbarLink href="/login">
                      <Link to="/login">Login</Link>
                    </MDBNavbarLink>{" "}
                  </>
                )}
              </MDBNavbarItem>
              <MDBNavbarItem>
                {isLoggedIn ? (
                  ""
                ) : (
                  <>
                    {" "}
                    <MDBNavbarLink href="/register">
                      <Link to="/register">Register</Link>
                    </MDBNavbarLink>{" "}
                  </>
                )}
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default Header;
