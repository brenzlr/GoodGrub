import React from 'react';
import SideNav from "components/SideNav";
import { LoggedInContext } from "App";

function Account() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

  return (
    <div>
      <SideNav/>
    </div>
  );
}

export default Account;
