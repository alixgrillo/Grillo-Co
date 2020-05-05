import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './style.css';


export const Header = (props) => {
  return (
    <div>
    <Container>
      <Jumbotron className="header-jumbo">
          <h1 className="display-2 text-center header">Welcome to Grillo &amp; Co.</h1>
          <h2>Fine Furniture Makers</h2>
      </Jumbotron>
    </Container>
    </div>
  );
};


export default Header;