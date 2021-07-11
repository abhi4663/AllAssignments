import React, { useState } from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import { Button, Col, Form } from "react-bootstrap";
import Home from "./home";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line
interface props {
  valid: string;
  handlelogin: (email: string, password: string) => void;
}
const Login: React.FC<props> = (props: any) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function inputluserName(e: any) {
    setUserName(e.target.value);
  }
  function inputlpassword(e: any) {
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <Form>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="userName"
            placeholder="Enter user name"
            onChange={inputluserName}
            style={{ width: "500px" }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={inputlpassword}
            style={{ width: "500px" }}
          />
        </Form.Group>
      </Form>
      <Button
        variant="success"
        type="button"
        onClick={() => props.handlelogin(userName, password)}
      >
        <HashRouter>
          <Link to="/">Login</Link>
          <Route exact path="/" component={Home}></Route>
        </HashRouter>
      </Button>
      {props.valid === "failed" ? (
        <div style={{ color: "red" }}>Invalid email or Password</div>
      ) : null}
    </div>
  );
};
export default Login;
