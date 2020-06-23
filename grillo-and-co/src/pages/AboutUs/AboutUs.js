import React, { Component } from "react";

import { Container, CardImg } from "reactstrap";
import axios from "axios";
import "./style.css";

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      aboutUsPhoto: "0011- Alix and John's Wedding Photos.jpg",
    };
  }

  componentDidMount() {
    this.getPhoto();
  }

  getPhoto = () => {
    this.dbGet(`/api/other`).then((response) => {
      console.log(response.data[0].aboutUsPhoto.split(": ")[1]);
      this.setState(
        {
          aboutUsPhoto: response.data[0].aboutUsPhoto.split(": ")[1],
        },
        console.log(this.state)
      );
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
      <Container style={{ marginBottom: "100px", maxWidth: "75%" }}>
        <h1>About Grillo & Co</h1>
        <CardImg
          className="about-us-photo"
          src={require(`../../images/${this.state.aboutUsPhoto}`)}
        />
        <h2>Our Story</h2>
        {/* <img src={require(`../../images/${this.state.aboutUsPhoto}`)}></img> */}
        <p>
          Owner John Grillo trained at the world renowned Thomas Chippendale
          International School of Furniture near Edinburgh, Scotland. While
          studying there he was featured in Furniture & Cabinetmaking Magazine,
          The Scottish Times, and Scottish Craftsmanship for his outstanding
          work.
        </p>
        <p>
          He also received the prestigious Richard Demarco Prize, awarded by the
          celebrated arts commentator to the student whose work not only
          displays design and woodworking skill but exceptional artistic talent.
          The prize was specifically awarded for John’s round dining table, made
          from some 40 pieces of intricately-cut walnut, with a dozen pieces of
          pepperwood veneer to form a simple, flowing yet geometrically-complex
          design.
        </p>
        <blockquote>
          “It is a piece of furniture that displays real skill but which, like a
          painting or piece of sculpture, transcends craftsmanship and design to
          become genuine art”, Demarco said.
        </blockquote>
        <p>
          A graduate of the Chippendale School and a member of the Fine
          Furniture Guild, John combines contemporary and traditional skills,
          high-quality materials, and his exceptional design talent to create
          beautiful free standing pieces of bespoke furniture.
        </p>
      </Container>
    );
  }
}

export default AboutUs;
