import React from "react";
import "./SideNav.css";
import { LoggedInContext } from "App";
import { Link } from "react-router-dom";

function SideNav(props) {
    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

    return (
        <div className="sidenav">
            <Link to="/about">About</Link>
            
            <Link to="/about">About</Link>

        </div>
    );
};

export default SideNav;