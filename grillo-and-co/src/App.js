import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Header></Header>
          <Switch>
            <Route
              path="/"
              render={()=> <HomePage></HomePage>}></Route>
          </Switch>
         <Footer />\
         </div>
      </Router>
    );
  }
}

export default App;
