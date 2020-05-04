import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarComponent></NavbarComponent>
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
