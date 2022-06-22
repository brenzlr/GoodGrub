import React, { useRef } from "react";
import { LoggedInContext, ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Col, Card, Button } from "react-bootstrap";

import "../App.css";

export function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [theme, setTheme] = React.useContext(ThemeContext);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001/";

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    // to fill in based on callPostBody
    fetch(url + "users/login", {
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
        json.success ? setIsLoggedIn(usernameRef.current.value) : setIsLoggedIn(null);
        if (json.success) {
          navigate("/myRecipes");
        }
      });
  };

  return (
    <div>
      <Col md={{ span: 4, offset: 4 }} className="mt-5">
        <Card id={theme}>
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="ml-3 form-label">
              Username
            </label>
            <br />
            <input id="username" type="text" ref={usernameRef} required className="form-control" />
            <br />

            <label htmlFor="password" className="ml-3 form-label">
              Password
            </label>
            <br />
            <input
              id="password"
              type="password"
              ref={passwordRef}
              required
              className="form-control"
            />
            <br />
            <Button type="submit" className="float-right  btn-success">
              Log in
            </Button>
          </form>
        </Card>
      </Col>
    </div>
  );
}

export default LoginForm;
