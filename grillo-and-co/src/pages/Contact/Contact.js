import React, { Component } from "react";

import { Col, Row, Container } from "reactstrap";
import "./style.css";
import ContactForm from "../../components/ContactForm/ContactForm";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    console.log("HELLO!");
  }

  render() {
    return (
      <Container style={{ marginBottom: "100px" }}>
        <h1>Contact Grillo & Co</h1>
        <p>
          Do you already have a strong vision of how you want your commission to
          look? Great! Please call (814) 598-2993, email{" "}
          <a href="mailto:john@grilloandco.com">john@grilloandco.com</a> or send
          us a message below to get started.
        </p>
        <Row>
          <Col md={6}>
            <p>
              Not sure where to start? That’s ok! You will work one-on-one with
              an experienced designer to help bring your vision to life. Start
              by answering a few questions:
            </p>
            <ul>
              <li>
                <strong>Functionality</strong> – What purpose does it serve?
              </li>
              <li>
                <strong>Dimensions</strong> – Do you have a preferred or
                required size?
              </li>
              <li>
                <strong>Materials</strong> – Do you have a particular species of
                wood or color in mind?
              </li>
              <li>
                <strong>Style</strong> – Do you have any existing pieces, or a
                specific design style in your home/workplace that you would like
                your piece to complement?{" "}
              </li>
              <li>
                <strong>Budget</strong> – Is there a preferred or required
                budget?
              </li>
            </ul>
            <p>
              We offer home/office visits if you have a specific style you would
              like to be complimented. Please feel free to send us pictures of
              styles that you like.{" "}
            </p>
          </Col>
          <Col md={6} className="contact-form">
            <ContactForm></ContactForm>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
