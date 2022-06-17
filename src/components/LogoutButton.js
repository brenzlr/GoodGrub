import React from "react";
import { LoggedInContext } from "../App";

export function LogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  return (
    <div>
      <button
        onClick={() => {
          setIsLoggedIn(false);
          alert("Logged out");
        }}
      >
        Logout
      </button>
    </div>
  );
}
