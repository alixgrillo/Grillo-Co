import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormText,
  Container,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import axios from "axios";
var FontAwesome = require("react-fontawesome");

class ContactForm extends Component {
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
       <Form>
      <FormGroup row>
        {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
        <Col sm={10}>
          <Input type="text" name="name" id="name-input" placeholder="NAME" />
        </Col>
      </FormGroup>
      <FormGroup row>
        {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
        <Col sm={10}>
          <Input type="email" name="email" id="email-input" placeholder="EMAIL" />
        </Col>
      </FormGroup>
      <FormGroup row>
        {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
        <Col sm={10}>
          <Input type="text" name="message" id="message-input" placeholder="SUBJECT" />
        </Col>
      </FormGroup>
      <FormGroup row>
        {/* <Label for="exampleText" sm={2}>Text Area</Label> */}
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" placeholder="MESSAGE" rows="6" />
        </Col>
      </FormGroup>
      <Button color="secondary">SUBMIT <FontAwesome
                name="share"
                size="lg"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              /></Button>{' '}    
    </Form>
    );
  }
}

export default ContactForm;