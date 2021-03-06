import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

class FAQ extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {}

  getPhotos = () => {
    this.dbGet(`/api/adminSavedPhoto`).then((response) =>
      this.setState({
        galleryPhotos: response.data
          .filter((photo) => photo.inGallery)
          .sort((a, b) => (a.galleryOrder > b.galleryOrder ? 1 : -1)),
      })
    );
  };

  dbGet = async (url) => {
    const response = await axios.get(url);
    const body = await response;
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <Container className="container-block">
        <h1>Working with Us</h1>
        <div className="gallery-cards pages pages-white">
          <Row style={{ marginBottom: "20px" }}>
            <h3>How it Works</h3>
            <hr></hr>
            <ol>
              <li>
                We’ll start by gathering some information about the piece you
                would like us to create, including the desired function,
                dimensions, materials, style, and your budget. You can also send
                us photos of the style you desire.
              </li>
              <li>
                Next, we will present you with 3D sketches of our initial
                designs and include different pricing options.
              </li>
              <li>
                Once a design is agreed upon, we will request a deposit (usually
                50% of the commission) to get started with the work. From there
                we can provide you with progress updates or you can visit the
                workshop to see your design come to life.
              </li>
            </ol>
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
          </Row>
          <Link
            to={`/contactus`}
            onClick={() => this.props.setActiveLink("contact")}
          >
            <Button className="contact-us-btn">
              Contact Us to Discuss Your Project
            </Button>
          </Link>
          <Row style={{ marginBottom: "20px" }}>
            <h3>WHY BUY BESPOKE?</h3>
            <hr></hr>
            <p>
              Buying bespoke is an enjoyable and exciting experience. This isn’t
              going to be a normal piece of furniture. It’s going to be totally
              unique and personal to you. You can be as involved in the design
              process as you’d like, right down to the style of dovetails. You
              are not limited by size, materials, or function. The quality will
              be outstanding and your family will enjoy it for many years.
            </p>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <h3>HOW MUCH DOES BESPOKE FURNITURE COST?</h3>
            <hr></hr>
            <p>
              It can vary widely based on the materials used, size of the
              project, and how intensive the labor is. It is usually more
              expensive than furniture found from big retailers but your money
              is going a lot further as you are buying directly from the
              designers.
            </p>
            <p>
              The furniture we make is tailored in every way, including budgets.
              We will provide you with options at different price points and
              create a beautiful piece of furniture that fits within your
              budget.
            </p>
          </Row>
          {/* <Link to={`/contactus`} onClick={this.handleContactClick}>
            <Button className="contact-us-btn">
              Contact Us to Discuss Your Project
            </Button>
          </Link> */}
          {/* <Row style={{ marginBottom: "20px" }}>
            <h3>WHAT IS THE PROCESS?</h3>
            <hr></hr>
            <p>
              First, we need to gather some information about the piece you
              would like us to create such as the function, dimensions,
              materials, style, and your budget. We offer home/office visits if
              you have a specific style you would like to be complimented or you
              can send us pictures of styles that you like.
            </p>
            <p>
              Next, we will present you with 3D sketches of our initial designs
              and will include different pricing options.
            </p>
            <p>
              Once a design is agreed upon we will request a deposit (usually
              50% of the commission) to get started with the work. From there we
              can provide you with progress updates or you can visit the
              workshop to see your design come to life.
            </p>
          </Row> */}
        </div>
      </Container>
    );
  }
}

export default FAQ;
