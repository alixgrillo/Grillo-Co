import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from "reactstrap";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Admin from "./pages/Admin/Admin";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/NavBar/NavBar";
import FAQ from "./pages/FAQ/FAQ";
import ForSale from "./pages/ForSale/ForSale";
import MobileResponsive from "./components/MobileResponsive/MobileResponsive";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarComponent width={this.state.width}></NavbarComponent>
          {/* <Header></Header> */}
          <br></br>
          {/* <img src={image}></img> */}
          <Switch>
            <Route path="/aboutus" render={() => <AboutUs></AboutUs>}></Route>
            <Route path="/gallery" render={() => <Gallery></Gallery>}></Route>
            <Route path="/contactus" render={() => <Contact></Contact>}></Route>
            <Route path="/faq" render={() => <FAQ></FAQ>}></Route>
            <Route path="/forsale" render={() => <ForSale></ForSale>}></Route>
            <Route
              exact
              path="/admin8145"
              render={() => <Admin></Admin>}
            ></Route>
            <Route path="/" render={() => <HomePage></HomePage>}></Route>
          </Switch>
          <Footer />
          {/* <MobileResponsive
            loadMobile={this.setMobileResponsive}
          ></MobileResponsive> */}
        </div>
      </Router>
    );
  }
}

export default App;
