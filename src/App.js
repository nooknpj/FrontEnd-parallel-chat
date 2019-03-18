import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div style={{ height: "5vh" }} />

          <div className="Content">
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route path="/home" component={HomePage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
