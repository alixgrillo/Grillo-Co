import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, CardImg, Col, Row } from "reactstrap";
import axios from "axios";
import "./style.css";

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      aboutUsPhoto: "Chippendale Student Images - April 2018 -381-min.jpg",
    };
  }

  componentDidMount() {
    this.getPhoto();
  }

  getPhoto = () => {
    this.dbGet(`/api/other`).then((response) => {
      this.setState({
        aboutUsPhoto: response.data[0].aboutUsPhoto.split(": ")[1],
      });
    });
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
        <h1>About Grillo & Co</h1>
        <div className="pages">
          <CardImg
            className="about-us-photo img-box"
            src={require(`../../images/${this.state.aboutUsPhoto}`)}
          />
          <h2 className="title-under-picture">
            About John Grillo, Owner of Grillo & Co
          </h2>
          {/* <img src={require(`../../images/${this.state.aboutUsPhoto}`)}></img> */}
          <Row>
            <Col lg={7}>
              <p>
                Owner John Grillo trained at the world renowned Thomas
                Chippendale International School of Furniture near Edinburgh,
                Scotland. While studying there he was featured in Furniture &
                Cabinetmaking Magazine, The Scottish Times, and Scottish
                Craftsmanship for his outstanding work.
              </p>
              <p>
                He also received the prestigious Richard Demarco Prize, awarded
                by the celebrated arts commentator to the student whose work not
                only displays design and woodworking skill but exceptional
                artistic talent. The prize was specifically awarded for John’s
                round dining table, made from some 40 pieces of intricately-cut
                walnut, with a dozen pieces of pepperwood veneer to form a
                simple, flowing yet geometrically-complex design.
              </p>
              <blockquote>
                “It is a piece of furniture that displays real skill but which,
                like a painting or piece of sculpture, transcends craftsmanship
                and design to become genuine art”, Demarco said.
              </blockquote>
              <p>
                A proud member of the Fine Furniture Guild, John combines
                contemporary and traditional skills, high-quality materials, and
                his exceptional design talent to create beautiful free standing
                pieces of bespoke furniture. If you are interested in working
                with John, please <Link to={`/contact`}>get in touch.</Link>
              </p>
            </Col>
            <Col lg={5}>
              <img
                className="award-picture"
                src={require(`../../images/Pepperwood-min.jpg`)}
                alt="Contemporary pedestal dining table designed by Grillo & Co made from american black walnut and exotic pepperwood burl arranged in a bookmatched, radial pattern to create a kaleidoscope effect. This custom piece of furniture won the Demarco Prize for contemporary art in furniture making."
              ></img>
            </Col>
            <h3>Features</h3>
            <ul>
              <li>
                <a
                  href="https://chippendaleschool.com/2017/11/building-business-case-woodworking/"
                  target="_blank"
                >
                  Building A Business Case For Woodworking, The Chippendale
                  International School of Furniture
                </a>
              </li>
              <li>
                <a
                  href="https://chippendaleschool.com/2018/03/contemporary-writing-desk/"
                  target="_blank"
                >
                  A Contemporary Writing Desk, The Chippendale International
                  School of Furniture
                </a>
              </li>
            </ul>
          </Row>
        </div>
      </Container>
    );
  }
}

export default AboutUs;
