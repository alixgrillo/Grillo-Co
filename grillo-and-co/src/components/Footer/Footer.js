import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";
var FontAwesome = require("react-fontawesome");

export const Footer = (props) => {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col md={4}>
              <FontAwesome
                name="mobile-alt"
                size="lg"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />{" "}
              Phone Number: 814.598.2993
            </Col>
            <Col md={4}>
              <a href="mailto:john@grilloandco.com">
                <FontAwesome
                  name="envelope"
                  size="lg"
                  style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                />{" "}
                Email: john@grilloandco.com
              </a>
            </Col>
            <Col md={4}>
              <a
                href="http://www.instagram.com/grilloandco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> Visit Us{" "}
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
