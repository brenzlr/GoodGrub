import React, { useRef } from "react";
import { LoggedInContext, ThemeContext } from "../App";
import { Card, Row, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [theme, setTheme] = React.useContext(ThemeContext);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    // to fill in based on callPostBody
    fetch(url + "/users/register", {
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
        json.success ? alert("User created successfully") : alert("Input a stronger password");
        json.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
        if (json.success) {
          navigate("/myRecipes");
        }
      });
  };

  return (
    <div>
      <Col md={{ span: 4, offset: 4 }} id={theme} className="mt-5">
        <Card id={theme}>
          <h1 className="text-center">Register</h1>
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
            <Button type="submit" className="float-right btn-success ">
              Register
            </Button>
          </form>
        </Card>
      </Col>
    </div>
  );
}

export default RegisterForm;
