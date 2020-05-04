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
  CardBody
} from "reactstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel"

class HomePage extends Component{
    constructor (){
        super();
        this.state = {
            content:  [

            ]
        }
    }

    render(){
        return(
            <Container>
                <Carousel content={this.state.content}></Carousel>
            </Container>
        )
    }
}

export default HomePage;