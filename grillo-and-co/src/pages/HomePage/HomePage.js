import React, { Component } from "react";

import {

  Container,
} from "reactstrap";
import "./style.css";
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
