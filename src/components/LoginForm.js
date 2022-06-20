import React, { useRef } from "react";
import { LoggedInContext } from "../App";
import { useNavigate } from "react-router-dom";
import {Col, Card, Button} from "react-bootstrap"
export function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

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
        if (json.success) {
          navigate("/");
        }
      });
  };

  return (
    <div>
      <Col md={{ span: 4, offset: 4 }} className="mt-5">
        <Card>
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="ml-3 form-label">Username</label><br/>
            <input id="username" type="text" ref={usernameRef} required  className="form-control"/><br/>

            <label htmlFor="password" className="ml-3 form-label">Password</label><br/>
            <input id="password" type="password" ref={passwordRef} required className="form-control" /><br/>
            <Button type="submit" className="float-right  btn-success">Log in</Button>
          </form>
        </Card>
      </Col>
    </div>
  );
}

export default LoginForm;
