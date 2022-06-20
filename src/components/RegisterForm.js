import React, { useRef } from "react";
import { LoggedInContext } from "../App";
import { Card, Row, Button, Col } from "react-bootstrap";

export function RegisterForm() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    // to fill in based on callPostBody
    fetch("http://localhost:3001/users/register", {
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
      });
  };

  return (
    <div className="container">
      <Col md={{ span: 4, offset: 4}} className="mt-5">
        <Card>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="control-label">Username</label>
            <br />
            <input className="form-control" id="username" type="text" ref={usernameRef} required />
            <br />
            <label htmlFor="password" className="control-label">Password</label>
            <br />
            <input className="form-control" id="password" type="password" ref={passwordRef} required />
            <br /> <br />
            <Button type="submit" className="btn btn-primary float-right">Register</Button>
          </form>
        </Card>
      </Col>
    </div>
  );
}

export default RegisterForm;
