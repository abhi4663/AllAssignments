import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Col } from "react-bootstrap";
import { ServiceManager } from "../services/service-layer";

const Register = (props: any) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  function inputuserName(e: any) {
    setUserName(e.target.value);
  }
  function inputemail(e: any) {
    setEmail(e.target.value);
  }
  function inputpassword(e: any) {
    setPassword(e.target.value);
  }

  const service = new ServiceManager();
  function handleSubmit() {
    const user = {
      userName: userName,
      email: email,
      password: password,
    };
    service.addUsers(user);
  }

  return (
    <>
      <Form>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>UserName </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user name"
            onChange={inputuserName}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={inputemail}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={inputpassword}
            required
          />
        </Form.Group>
      </Form>
      <Button
        className="style"
        variant="success"
        type="button"
        onClick={() => {
          handleSubmit();
          history.push("/");
        }}
      >
        Register
      </Button>
    </>
  );
};
export default Register;
