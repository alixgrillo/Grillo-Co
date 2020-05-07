import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Container,
  NavbarBrand
} from "reactstrap";
// import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./style.css";

class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar className="navbar" expand="sm">
            <Nav style={{marginLeft: "50px"}} className="mr-auto nav" tabs>
              <NavbarBrand>Grillo &amp; Co</NavbarBrand>
              {/* <NavItem>
                <Link to={`/`} className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to={`/gallery`} className="nav-link">
                  Gallery
                </Link>
              </NavItem>
              <NavItem>
                <Link to={`/aboutus`} className="nav-link">
                  About Us
                </Link>
              </NavItem>
              <NavItem>
                <Link to={`/faq`} className="nav-link">
                  FAQ
                </Link>
              </NavItem>
              <NavItem>
                <Link to={`/forsale`} className="nav-link">
                  For Sale
                </Link>
              </NavItem>
              <NavItem>
                <Link to={`/contactus`} className="nav-link">
                  Contact Us
                </Link>
              </NavItem>
              */}
            </Nav>
            {/* </Collapse> */}
          </Navbar>
        </Container>
      </div>
    );
  }
}
// }

export default NavbarComponent;
