import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      showAuthenFailed: 0,
      username: "notAssigned",
      password: "notAssigned"
    };
  }

  onFormChange = e => {
    this.state[e.target.type] = e.target.value;
    console.log(this.state);
  };

  //------------------------------------------------Login Authen-------------------------------------------------------------------------
  onSubmitLoginClick = () => {
    // waits for backEnd Implemetation
    //this.fetchLoginAuthen(this.state);
    window.location.href = "/home";
  };

  async fetchLoginAuthen(e) {
    try {
      console.log(JSON.stringify(e));
      const response = await fetch("/trainer_dee/login_authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
      });

      let status = response.status;
      if (status == 400) {
        this.setState({
          showAuthenFailed: 1
        });
        return 0;
      }
      if (status == 200) {
        let results = await response.json();
        console.log("successful login");
        console.log(results);
        console.log(results[0].clientID);
        console.log(results[0].fName);
        console.log(results[0].isTrainer);
        localStorage.setItem("clientID", results[0].clientID);
        localStorage.setItem("fName", results[0].fName);
        localStorage.setItem("isTrainer", results[0].isTrainer);
        localStorage.setItem("isLoggedIn", 1);
        this.handleClose();
        console.log(localStorage.getItem("clientID"));
        console.log(localStorage.getItem("fName"));
        console.log(localStorage.getItem("isLoggedIn"));
        console.log(localStorage.getItem("isTrainer"));
        // window.location.reload();
        return results;
      }
    } catch (error) {
      console.log("FetchLoginAuthen failed", error);
    }
  }

  //------------------------------------------------Login Authen-------------------------------------------------------------------------

  render() {
    return (
      <div>
        <p style={{ marginLeft: "50vh" }}> please login</p>

        <Form.Group className="loginForm">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Username"
            onChange={this.onFormChange}
          />
          <Form.Label style={{ marginTop: "10px" }}>Password</Form.Label>
          <Form.Control
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
