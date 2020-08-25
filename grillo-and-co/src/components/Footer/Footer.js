import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
var FontAwesome = require("react-fontawesome");

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`};
`;

export const Footer = (props) => {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col className="footer-text" md={3}>
              <FontAwesome
                name="mobile-alt"
                size="lg"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />{" "}
              814.598.2993
            </Col>
            <Col className="footer-text" md={3}>
              <a href="mailto:john@grilloandco.com">
                <FontAwesome
                  name="envelope"
                  size="lg"
                  style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                />{" "}
                john@grilloandco.com
              </a>
            </Col>
            <Col className="footer-text" md={3}>
              <a
                href="http://www.instagram.com/grilloandco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> Visit Us{" "}
              </a>
            </Col>

            <Col className="footer-text" md={3}>
              {/* <Bounce> */}
              <Link to={`/contactus`}>
                <FontAwesome
                  name="plus"
                  size="lg"
                  style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                />{" "}
                Contact
              </Link>
              {/* </Bounce> */}
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
