import React, { useRef } from "react";
import { LoggedInContext } from "../App";
import { Card, Row, Button, Col } from "react-bootstrap";
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
    <div className="container">
      <Col md={{ span: 4, offset: 4}} className="mt-5">
        <Card>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="control-label mx-3">Username</label>
            <br />
            <input className="form-control" id="username" type="text" ref={usernameRef} required />
            <br />
            <label htmlFor="password" className="control-label mx-3">Password</label>
            <br />
            <input className="form-control " id="password" type="password" ref={passwordRef} required />
            <br /> <br />
            <Button type="submit" className="btn btn-success float-right">Log in</Button>
          </form>
        </Card>
      </Col>
    </div>
  );
}

export default LoginForm;
