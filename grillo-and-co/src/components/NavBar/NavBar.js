import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Col,
  Row,
  NavbarToggler,
  Collapse,
} from "reactstrap";
// import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./style.css";
// import { useMediaQuery } from "react-responsive";
var FontAwesome = require("react-fontawesome");

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "home",
      collapsed: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      activeLink: nextProps.activeLink,
    });
  }

  componentDidMount() {
    this.setState({
      width: this.props.width,
    });
  }
  // componentWillUpdate() {}
  updateActiveLink = (link) => {
    if (this.state.activeLink !== link) {
    }
  };
  toggleNavbar = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  handleClick = (event) => {
    // const {
    //   target: { value },
    // } = event;
    // And do whatever you need with it's value, for example change state
    //this.setState({ activeLink: event.target.dataset.user, collapsed: true });
    this.setState({ collapsed: true });
    this.props.setActiveLink(event.target.dataset.user);
  };

  render() {
    return (
      <div className="small-screen-nav">
        {this.props.width < 1223 ? (
          <div>
            <Navbar dark className="navbarzindex">
              <NavbarBrand>
                {/* Grillo & Co */}
                <img
                  src="/Grillo&Co_Logo_2020_BrandGuidelines_Line_Logo_Tagline_White.png"
                  width="150"
                  height="150"
                  className="d-inline-block align-top logo"
                  alt="Grillo and Co Bespoke Furniture"
                />
              </NavbarBrand>
              <NavbarToggler
                onClick={this.toggleNavbar}
                className="mr-2 toggle"
              />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar className="small-screen-nav-list">
                  <NavItem>
                    <Link
                      to={`/`}
                      className="nav-link"
                      value="home"
                      data-user="home"
                      onClick={this.handleClick}
                      id={
                        this.state.activeLink === "home"
                          ? "active-link"
                          : "none"
                      }
                    >
                      Home <br></br>
                      <FontAwesome
                        name="home"
                        size="lg"
                        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                      />
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to={`/gallery`}
                      className="nav-link"
                      data-user="gallery"
                      onClick={this.handleClick}
                      id={
                        this.state.activeLink === "gallery"
                          ? "active-link"
                          : "none"
                      }
                    >
                      Gallery <br></br>
                      <FontAwesome
                        name="camera-retro"
                        size="lg"
                        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                      />
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to={`/aboutus`}
                      className="nav-link"
                      data-user="about"
                      onClick={this.handleClick}
                      id={
                        this.state.activeLink === "about"
                          ? "active-link"
                          : "none"
                      }
                    >
                      About Us<br></br>
                      <FontAwesome
                        name="user-secret"
                        size="lg"
                        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                      />
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to={`/faq`}
                      className="nav-link"
                      data-user="faq"
                      onClick={this.handleClick}
                      id={
                        this.state.activeLink === "faq" ? "active-link" : "none"
                      }
                    >
                      FAQ<br></br>
                      <FontAwesome
                        name="question-circle"
                        size="lg"
                        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                      />
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to={`/forsale`}
                      className="nav-link"
                      data-user="sale"
                      onClick={this.handleClick}
                      id={
                        this.state.activeLink === "sale"
                          ? "active-link"
                          : "none"
                      }
                    >
                      For Sale<br></br>
                      <FontAwesome
                        name="chair"
                        size="lg"
                        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                      />
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to={`/contactus`}
                      className="nav-link"
                      data-user="contact"
                      onClick={this.handleClick}
                      id={
                        this.state.activeLink === "contact"
                          ? "active-link"
                          : "none"
                      }
                    >
                      Contact Us<br></br>
                      <FontAwesome
                        name="address-card"
                        size="lg"
                        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                      />
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Row>
                      <Col lg={5}></Col>
                      <Col lg={1} className="nav-link-contact">
                        <FontAwesome
                          name="mobile-alt"
                          size="sm"
                          style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                        />
                      </Col>
                      <Col lg={1} className="nav-link-contact">
                        <a href="mailto:john@grilloandco.com">
                          <FontAwesome
                            name="envelope"
                            size="sm"
                            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                          />
                        </a>
                      </Col>
                      <Col lg={1} className="nav-link-contact">
                        <a
                          href="http://www.instagram.com/grilloandco/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </Col>
                    </Row>
                    <Link to={`/contactus`}></Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        ) : (
          <div className="big-screen-nav">
            {/* <Container> */}
            <Navbar className="navbar" expand="sm">
              <Nav vertical className="mr-auto nav">
                <NavbarBrand>
                  {/* Grillo & Co */}
                  <img
                    src="/Grillo&Co_Logo_2020_BrandGuidelines_Line_Logo_Tagline_White.png"
                    width="150"
                    height="150"
                    className="d-inline-block align-top"
                    alt="Grillo and Co Bespoke Furniture"
                  />
                </NavbarBrand>
                <NavItem active>
                  <Link
                    to={`/`}
                    className="nav-link"
                    value="home"
                    data-user="home"
                    onClick={this.handleClick}
                    id={
                      this.state.activeLink === "home" ? "active-link" : "none"
                    }
                  >
                    Home <br></br>
                    <FontAwesome
                      name="home"
                      size="lg"
                      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                    />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to={`/gallery`}
                    className="nav-link"
                    data-user="gallery"
                    onClick={this.handleClick}
                    id={
                      this.state.activeLink === "gallery"
                        ? "active-link"
                        : "none"
                    }
                  >
                    Gallery <br></br>
                    <FontAwesome
                      name="camera-retro"
                      size="lg"
                      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                    />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to={`/aboutus`}
                    className="nav-link"
                    data-user="about"
                    onClick={this.handleClick}
                    id={
                      this.state.activeLink === "about" ? "active-link" : "none"
                    }
                  >
                    About Us<br></br>
                    <FontAwesome
                      name="user-secret"
                      size="lg"
                      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                    />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to={`/faq`}
                    className="nav-link"
                    data-user="faq"
                    onClick={this.handleClick}
                    id={
                      this.state.activeLink === "faq" ? "active-link" : "none"
                    }
                  >
                    FAQ<br></br>
                    <FontAwesome
                      name="question-circle"
                      size="lg"
                      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                    />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to={`/forsale`}
                    className="nav-link"
                    data-user="sale"
                    onClick={this.handleClick}
                    id={
                      this.state.activeLink === "sale" ? "active-link" : "none"
                    }
                  >
                    For Sale<br></br>
                    <FontAwesome
                      name="chair"
                      size="lg"
                      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                    />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to={`/contactus`}
                    className="nav-link"
                    data-user="contact"
                    onClick={this.handleClick}
                    id={
                      this.state.activeLink === "contact"
                        ? "active-link"
                        : "none"
                    }
                  >
                    Contact Us<br></br>
                    <FontAwesome
                      name="address-card"
                      size="lg"
                      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                    />
                  </Link>
                </NavItem>
                <NavItem>
                  <Row>
                    <Col lg={2}></Col>
                    <Col lg={3} className="nav-link-contact">
                      <FontAwesome
                        name="mobile-alt"
                        size="sm"
                        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                      />
                    </Col>
                    <Col lg={3} className="nav-link-contact">
                      <a href="mailto:john@grilloandco.com">
                        <FontAwesome
                          name="envelope"
                          size="sm"
                          style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                        />
                      </a>
                    </Col>
                    <Col lg={3} className="nav-link-contact">
                      <a
                        href="http://www.instagram.com/grilloandco/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </Col>
                  </Row>
                  <Link to={`/contactus`}></Link>
                </NavItem>
              </Nav>
              {/* </Collapse> */}
            </Navbar>
            {/* </Container> */}
          </div>
        )}
      </div>
    );
  }
}
// }

export default NavbarComponent;
