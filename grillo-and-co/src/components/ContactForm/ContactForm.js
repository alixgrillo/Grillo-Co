import React, { Component } from "react";
// import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Form, FormGroup, Input, Col, FormFeedback } from "reactstrap";
import axios from "axios";
import "./style.css";
var FontAwesome = require("react-fontawesome");

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      validation: {
        name: false,
        email: false,
        subject: false,
        message: false,
      },
    };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  componentDidMount() {}

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
    // var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    this.setState({
      validation: {
        email: this.state.email === "",
        name: this.state.name === "",
        subject: this.state.subject === "",
        message: this.state.message === "",
      },
    });
  };
  onClickHandler = (event) => {
    this.validate();
    event.preventDefault();
    if (
      !this.state.validation.name &&
      !this.state.validation.email &&
      !this.state.validation.subject &&
      !this.state.validation.message
    ) {
      const requestOptions = this.state;

      this.dbPost(requestOptions).then((data) => console.log(data));
      //this.dbPost(requestOptions);
    }
  };
  dbPost = async (requestOptions) => {
    const response = await axios.post(`/email`, requestOptions);
    const body = await response;
    if (response.status !== 200) {
      throw Error(body.message);
    } else {
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
    return body;
  };
  validate = () => {
    //var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    this.setState({
      validation: {
        email: this.state.email === "",
        name: this.state.name === "",
        subject: this.state.subject === "",
        message: this.state.message === "",
      },
    });
  };
  handleValidSubmit(event, values) {
    this.setState({
      validation: {
        email: this.state.email === "",
      },
    });
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({ email: values.email, error: true });
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
          <Col sm={1}></Col>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="name-input"
              placeholder="NAME"
              onChange={this.handleInputChange}
              value={this.state.name}
              invalid={this.state.validation.name}
            />
          </Col>
        </FormGroup>
        {/* <AvForm
          onValidSubmit={this.handleValidSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
        >
          <AvField
            name="email"
            type="email"
            placeholder="EMAIL"
            value={this.state.email}
            required
          />
        </AvForm> */}
        <FormGroup row>
          {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
          <Col sm={1}></Col>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="email-input"
              placeholder="EMAIL"
              onChange={this.handleInputChange}
              value={this.state.email}
              invalid={this.state.validation.email}
            />

            <FormFeedback invalid={this.state.validation.email.toString()}>
              Please provide a valid email so we know how to contact you.
            </FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
          <Col sm={1}></Col>
          <Col sm={10}>
            <Input
              type="text"
              name="subject"
              id="message-input"
              placeholder="SUBJECT"
              onChange={this.handleInputChange}
              value={this.state.subject}
              invalid={this.state.validation.subject}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          {/* <Label for="exampleText" sm={2}>Text Area</Label> */}
          <Col sm={1}></Col>
          <Col sm={10}>
            <Input
              type="textarea"
              name="message"
              id="exampleText"
              placeholder="MESSAGE"
              rows="6"
              onChange={this.handleInputChange}
              value={this.state.message}
              invalid={this.state.validation.message}
            />
          </Col>
        </FormGroup>
        <Button className="submit-btn" onClick={this.onClickHandler}>
          SUBMIT {"  "}
          <FontAwesome
            name="share"
            size="lg"
            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
          />
        </Button>{" "}
      </Form>
    );
  }
}

export default ContactForm;
