import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
    Col,
    Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
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
        <Container>
            <h1>Contact Us</h1>
            <p>Do you already have a strong vision of how you want your commission to look? 
                Great! Please call (814) 598-2993, email john@grilloandco.com or 
                send us a message below to get started.</p>
                <Row>
                    <Col md={6}>
                        <p>Not sure where to start? That’s ok! You will work one-on-one 
                            with an experienced designer to help bring your vision to life. 
                            Start by answering a few questions:</p>
                        <ul>
                            <li>Functionality – What purpose does it serve?</li>
                            <li>Dimensions – Do you have a preferred or required size?</li>
                            <li>Materials – Do you have a particular species of wood or color in mind?</li>
                            <li>Style – Do you have any existing pieces, or a specific design style in your 
                                home/workplace that you would like your piece to complement? </li>
                            <li>Budget – Is there a preferred or required budget?</li>
                        </ul>
                        <p>We offer home/office visits if you have a specific style you would like to be 
                            complimented. Please feel free to send us pictures of styles that you like. </p>
                    </Col>
                    <Col md={6}>
                    <ContactForm></ContactForm>
                    </Col>
                </Row>

        </Container>

    );
  }
}

export default Contact;