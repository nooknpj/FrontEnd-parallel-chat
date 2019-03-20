import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import io from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "localhost:8081"
    };
  }

  componentDidMount = () => {
    const socket = io.connect(this.state.endpoint, {
      reconnection: true,
      reconnectionDelay: 100,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity
    });

    socket.on("clientConnect", () => {
      console.log("client is connected to socket");
    });

    socket.on("loginSuccess", data => {
      console.log("login success returned from backend");
      console.log(data.userID);
      localStorage.setItem("userID", data.userID);
      window.location.href = "/home";
    });

    this.setState({
      socket: socket
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div style={{ height: "5vh" }} />

          <div className="Content">
            <Switch>
              {/* <Route exact path="/" component={LoginPage} /> */}
              {/* <Route path="/home" component={HomePage} /> */}

              <Route
                exact
                path="/"
                render={props => (
                  <LoginPage {...props} socket={this.state.socket} />
                )}
              />

              <Route
                path="/home"
                render={props => (
                  <HomePage {...props} socket={this.state.socket} />
                )}
              />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
