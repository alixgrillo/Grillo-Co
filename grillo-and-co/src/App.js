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
// import MobileResponsive from "./components/MobileResponsive/MobileResponsive";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, activeLink: "home" };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    if (
      window.location.pathname.substring(1) !== "home" &&
      window.location.pathname.substring(1) !== ""
    ) {
      switch (window.location.pathname.substring(1)) {
        case "aboutus":
          this.setState({ activeLink: "about" });
          break;
        case "contactus":
          this.setState({ activeLink: "contact" });
          break;
        default:
          this.setState({ activeLink: window.location.pathname.substring(1) });
      }
    }
    console.log(`"${window.location.pathname.substring(1)}"`);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  setActiveLink = (link) => {
    this.setState({ activeLink: link });
  };
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <NavbarComponent
              width={this.state.width}
              activeLink={this.state.activeLink}
              setActiveLink={this.setActiveLink}
            ></NavbarComponent>
            {/* <Header></Header> */}
            <br></br>
            {/* <img src={image}></img> */}
            <Switch>
              <Route path="/aboutus" render={() => <AboutUs></AboutUs>}></Route>
              <Route
                path="/gallery"
                render={() => <Gallery width={this.state.width}></Gallery>}
              ></Route>
              <Route
                path="/contactus"
                render={() => <Contact></Contact>}
              ></Route>
              <Route
                path="/faq"
                render={() => <FAQ setActiveLink={this.setActiveLink}></FAQ>}
              ></Route>
              <Route path="/forsale" render={() => <ForSale></ForSale>}></Route>
              <Route
                exact
                path="/admin8145"
                render={() => <Admin></Admin>}
              ></Route>
              <Route
                path="/home"
                render={() => (
                  <HomePage setActiveLink={this.setActiveLink}></HomePage>
                )}
              ></Route>
              <Route
                path="/"
                render={() => (
                  <HomePage setActiveLink={this.setActiveLink}></HomePage>
                )}
              ></Route>
            </Switch>
            <Footer setActiveLink={this.setActiveLink} />
            {/* <MobileResponsive
            loadMobile={this.setMobileResponsive}
          ></MobileResponsive> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
