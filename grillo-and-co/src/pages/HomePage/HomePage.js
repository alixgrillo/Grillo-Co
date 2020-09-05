import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Button } from "reactstrap";
import "./style.css";
import CarouselP from "../../components/Carousel/Carousel";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    // axios.get("/api/carousel").then((res) => {
    //   this.setState({ content: res.data });
    // });
    // const script = document.createElement("script");
    this.curator();
  }

  curator() {
    var i,
      e,
      d = document,
      s = "script";
    i = d.createElement("script");
    i.async = 1;
    i.src =
      "https://cdn.curator.io/published/1a3ca4fd-0348-4825-a8a3-5ee2cb704927.js";
    e = d.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e);
  }

  render() {
    return (
      <div>
        <Container className="container-block">
          <h1>Welcome to Grillo & Co: Custom Furniture Design</h1>
          <div className="pages pages-white">
            <p>
              Grillo and Co creates beautiful bespoke furniture for your home or
              workplace. Operating almost entirely by commission, we custom
              design and hand make each piece to your exact specifications at
              our workshop in Bend, Oregon. We will help you visualize your
              ideas and, once you’re completely happy with the proposed design,
              we hand-craft your unique heirloom piece of furniture.
            </p>
            <p>
              {" "}
              These custom wood furniture pieces are designed to be more than
              “things”: they are an expression of your personality and a unique
              way to tell your story.
            </p>
            <Link
              to={`/contactus`}
              onClick={() => this.props.setActiveLink("contact")}
            >
              <Button className="contact-us-btn">
                Contact Us to Discuss Your Project
              </Button>
            </Link>
          </div>

          <div className="carousel">
            <CarouselP
              content={this.state.content}
              setActiveLink={this.props.setActiveLink}
            ></CarouselP>
          </div>
          {/* </Container> */}
          <div className="pages">
            <h2>Meet John Grillo, Master Woodworker</h2>
            <Row>
              <Col lg={6}>
                <div className="home-page-image">
                  <img
                    className="img-box meet-john-image"
                    src={require(`../../images/Chippendale Student Images - April 2018 -375-min.jpg`)}
                    alt="John Grillo sits at a tool bench in his wood shop while hand planing a board of wood"
                  ></img>
                </div>
              </Col>
              <Col lg={6}>
                <div className="meet-john">
                  <p>
                    Award-winning craftsman John Grillo has been honing his
                    professional woodworking skills for the past 5 years. He is
                    a proud member of the Fine Furniture Guild and now creates
                    beautiful freestanding custom furniture form his workshop in
                    Bend, Oregon.{" "}
                  </p>
                  <p>
                    {" "}
                    <Link to={`/aboutus`}>
                      Learn more about John’s story here.
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="pages">
            {/* <Container className="container-block"> */}
            <h2 style={{ marginBottom: "20px" }}>Craftsman at Work</h2>
            <p style={{ textAlign: "center" }}>
              {" "}
              Take a peek inside our shop and see what we are up to!
            </p>

            <Row style={{ paddingTop: "25px" }}>
              {/* <!-- Place <div> tag where you want the feed to appear --> */}
              <div id="curator-feed-default-feed-layout">
                <a
                  href="https://curator.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crt-logo crt-tag"
                >
                  Powered by Curator.io
                </a>
              </div>
            </Row>
          </div>

          {/* <div className="pages">
         
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
          </div> */}
        </Container>
      </div>
    );
  }
}

export default HomePage;
