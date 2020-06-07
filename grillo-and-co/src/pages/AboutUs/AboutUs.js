import React, { Component } from "react";

import { Container } from "reactstrap";
import "./style.css";

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <h1>About Us</h1>
        {/* <img href="https://via.placeholder.com/728x90.png"></img> */}
        <h2>Our Story</h2>
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
