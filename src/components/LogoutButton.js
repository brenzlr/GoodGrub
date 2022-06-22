import React from "react";
import { LoggedInContext } from "../App";
import { useNavigate } from "react-router-dom";

export function LogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          setIsLoggedIn(false);
          alert("Logged out");
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}
