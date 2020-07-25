import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import "./style.css";
import CarouselP from "../../components/Carousel/Carousel";
import Map from "../../components/Map/Map";
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
      this.setState({ content: res.data });
    });
  }

  render() {
    return (
      <div>
        <Container className="container-block">
          <h1>Welcome to Grillo & Co</h1>
          <div className="pages pages-white">
            <p>
              We make beautiful bespoke furniture for your home or work place.
              Working almost entirely by commission, we custom design and
              handmake each piece to your exact desire. The pieces of furniture
              we make aren’t just ‘things’ but rather expressions and extensions
              of your personality.
            </p>
          </div>

          <div className="carousel">
            <CarouselP
              content={this.state.content}
              setActiveLink={this.props.setActiveLink}
            ></CarouselP>
          </div>
          {/* </Container> */}
          <div className="pages">
            {/* <Container className="container-block"> */}
            <h2 style={{ marginBottom: "200px;" }}>Craftsman at Work</h2>
            <p style={{ textAlign: "center" }}>
              {" "}
              Take a peek inside our shop and see what we are up to
            </p>

            <Row style={{ paddingTop: "25px" }}>
              {/* <!-- Place <div> tag where you want the feed to appear --> */}
              <div id="curator-feed-default-feed-layout">
                <a
                  href="https://curator.io"
                  target="_blank"
                  class="crt-logo crt-tag"
                >
                  Powered by Curator.io
                </a>
              </div>
            </Row>
          </div>
          <div className="pages">
            {/* <Container className="container-block"> */}
            <h2>Custom Wood Furniture</h2>
            <Row>
              <Col lg={6}>
                <Map></Map>
              </Col>
              <Col lg={6}>
                <p>
                  Based in Bend, OR we specialize in hand-made, custom wood
                  furniture. We will help you visualise your ideas and, only
                  when you’re completely happy with the proposed design,
                  hand-craft your unique heirloom piece of furniture.
                </p>
                <p>
                  Owner John Grillo gained a solid foundation in traditional and
                  contemporary techniques from the top master craftsmen in
                  Scotland. You can learn more about John{" "}
                  <Link to={`/aboutus`}>here</Link>.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default HomePage;
