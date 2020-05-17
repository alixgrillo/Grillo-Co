import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
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
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import axios from "axios";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    axios.get("/api/carousel").then((res) => {
      console.log(res.data);
      this.setState({ content: res.data });
    });
  }

  render() {
    return (
      <Container>
        <div className="carousel">
          <Carousel content={this.state.content}></Carousel>
        </div>
        
      </Container>
    );
  }
}

export default HomePage;
