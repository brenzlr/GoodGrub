import React, { useRef } from "react";
import { LoggedInContext } from "../App";

export function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    // to fill in based on callPostBody
    fetch("http://localhost:3001/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        json.success ? alert("You're logged in") : alert("Try Again");
        json.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={usernameRef} required />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} required />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
