import React, { Component } from "react";

import { Container } from "reactstrap";
import "./style.css";
import CarouselP from "../../components/Carousel/Carousel";
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
        <h1>Welcome to Grillo & Co</h1>
        <p>
          We make beautiful bespoke furniture for your home or work place.
          Working almost entirely by commission, we custom design and handmake
          each piece to your exact desire. The pieces of furniture we make
          aren’t just ‘things’ but rather expressions and extensions of your
          personality.
        </p>
        <div className="carousel">
          <CarouselP content={this.state.content}></CarouselP>
        </div>
      </Container>
    );
  }
}

export default HomePage;
