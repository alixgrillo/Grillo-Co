import React from "react";
import { Jumbotron } from "reactstrap";
import "./style.css";

const header = {
  // backgroundColor: "transparent",
  padding: "20px 0 0 0",
};

export const Header = (props) => {
  return (
    <div>
      {/* <Container> */}
      <Jumbotron style={header} className="header-jumbo">
        {/* <h1 style={h1} className="display-2 text-center header">
            Grillo &amp; Co
          </h1>
          <h2>Bespoke Furniture</h2> */}
        <img
          src="/Grillo&Co_Logo_2020_BrandGuidelines_Line_Logo_Tagline_White.png"
          width="300"
          height="auto"
          className="logo"
          alt="Grillo and Co Bespoke Furniture"
        />
      </Jumbotron>
      {/* </Container> */}
    </div>
  );
};

export default Header;
