import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import axios from "axios";

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    console.log("HELLO!");
  }

  render() {
    return (
      <Container>
        <h1>About Us</h1>
        <img href="https://via.placeholder.com/728x90.png"></img>
        <h2>Our Story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut quam mattis, suscipit augue eu, finibus lectus. Mauris fringilla lectus quis magna luctus lobortis. Phasellus gravida nisl a nibh egestas cursus. Etiam sed ultrices ligula. Fusce scelerisque nulla id elit varius, quis ultricies sem vehicula. Vivamus eu convallis ex. Donec eleifend nec arcu nec imperdiet. Praesent elit justo, fermentum ut placerat quis, congue a mauris. Nulla scelerisque leo dapibus ligula pretium, non imperdiet orci maximus. Nunc fermentum ipsum at semper porta. Morbi a iaculis lectus. Aenean varius vehicula dui a ultrices. Nulla cursus fringilla posuere. Phasellus a nibh nec magna dictum bibendum. Sed id ipsum consectetur dolor accumsan condimentum a vel erat. Vestibulum cursus cursus condimentum.

Aenean dictum nec turpis vitae tincidunt. Proin rhoncus posuere nisi, a dignissim dolor eleifend quis. Proin feugiat consectetur justo. Phasellus odio turpis, vehicula quis nisl ac, dictum consectetur libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque eu quam ex. Ut massa ex, fringilla non fermentum ac, sodales eget nulla. Aliquam congue auctor eros, eget molestie arcu lobortis at. Mauris eleifend odio ex, ut tristique lectus varius eget. Vivamus at metus in ipsum viverra pretium tempor nec sem. Etiam vulputate urna commodo ultrices fermentum.

Sed ut eleifend augue. Proin euismod orci erat, id tincidunt leo lobortis eu. Quisque ac elit elementum, hendrerit quam quis, pellentesque dui. Nam a fermentum mauris, ut consectetur metus. Integer dignissim in orci interdum consequat. Duis facilisis ac arcu a tempor. Ut lacus enim, condimentum at consectetur sollicitudin, tristique a nunc. Suspendisse at nibh augue. Aliquam volutpat placerat libero ut posuere. Ut pharetra non leo eget aliquam. Proin nec dapibus ex, non hendrerit quam.

Curabitur eros massa, maximus id quam nec, tincidunt sodales odio. Donec rutrum lectus sagittis neque pulvinar euismod. Aenean porta vestibulum laoreet. Phasellus efficitur velit eu nunc tincidunt, vel semper nisl posuere. Proin lacinia lacinia tellus vitae cursus. Morbi tristique lorem id efficitur posuere. Sed quam lacus, sollicitudin non enim ac, blandit dictum nulla. In lacinia felis at mi maximus vestibulum.

Suspendisse potenti. In mollis gravida urna non euismod. Integer sagittis vel eros sit amet sollicitudin. Suspendisse efficitur id magna at sodales. Praesent faucibus pretium mi, eget scelerisque orci scelerisque nec. Quisque vitae arcu non lacus fermentum convallis. Donec ante massa, facilisis eu augue vitae, vulputate feugiat turpis.</p>
      </Container>
    );
  }
}

export default AboutUs;