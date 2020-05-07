import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './style.css';

const header = {
  backgroundColor: "transparent",
  padding: "70px 0 0 0"
}
const h1 = {
  color: "#2B2214",
  textShadow: "none"
}

export const Header = (props) => {
  return (
    <div>
    <Container>
      <Jumbotron style={header} className="header-jumbo">
          <h1 style={h1} className="display-2 text-center header">Grillo &amp; Co</h1>
          <h2>Fine Furniture Makers</h2>
      </Jumbotron>
    </Container>
    </div>
  );
};


export default Header;