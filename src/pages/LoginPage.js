import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import io from "socket.io-client";

export class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      showAuthenFailed: 0,
      endpoint: "localhost:8081",
      username: "notAssigned",
      password: "notAssigned"
    };
  }

  onFormChange = e => {
    this.state[e.target.id] = e.target.value;

    console.log(this.state);
  };

  //------------------------------------------------Login Authen-------------------------------------------------------------------------
  onSubmitLoginClick = () => {
    // waits for backEnd Implemetation
    // call Socket.on or something
    let username = this.state.username;
    let password = this.state.password;
    this.props.socket.emit("loginClick", { username, password });
    //window.location.href = "/home";
  };

  //------------------------------------------------Login Authen-------------------------------------------------------------------------

  render() {
    return (
      <div>
        <Form.Group className="loginForm">
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="username"
            placeholder="Username"
            onChange={this.onFormChange}
          />
          <Form.Label style={{ marginTop: "10px" }}>Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.onFormChange}
          />

          <Button
            variant="primary"
            type="submit"
            onClick={this.onSubmitLoginClick}
            style={{ margin: "5px", marginTop: "15px", float: "right" }}
          >
            Login
          </Button>
        </Form.Group>
      </div>
    );
  }
}

export default LoginPage;
