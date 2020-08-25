import React, { Component } from "react";

import { Col, Row, Container } from "reactstrap";
import "./style.css";
import Map from "../../components/Map/Map";
import ContactForm from "../../components/ContactForm/ContactForm";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Container className="container-block">
        <h1>Contact Grillo & Co</h1>
        <div className="pages pages-white">
          <p>
            Are you ready to discuss your ideas for a custom piece of bespoke
            furniture? Great! Please call (814) 598-2993 or email{" "}
            <a href="mailto:john@grilloandco.com">john@grilloandco.com</a>. You
            can also send us a message below to get started.
          </p>
          <Row>
            <Col md={6} className="contact-form">
              <ContactForm></ContactForm>
            </Col>
            <Col className="map-div" lg={6}>
              <h4>We are located in Bend, Oregon</h4>
              <Map></Map>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Contact;
