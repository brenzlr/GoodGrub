import React from "react";
import "../components/Header.css";
import { NavButton } from "../components/NavButton";
import { LoggedInContext } from "../App";
import { useContext } from "react";
import { LogoutButton } from "../components/LogoutButton";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white" fixed>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/about">About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/recipes">Recipes</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {isLoggedIn ? (
                  <LogoutButton />
                ) : (
                  <>
                    <MDBNavbarLink href="/login">Login</MDBNavbarLink>
                  </>
                )}
              </MDBNavbarItem>
              <MDBNavbarItem>
                {isLoggedIn ? (
                  ""
                ) : (
                  <>
                    <MDBNavbarLink href="/register">Register</MDBNavbarLink>
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
