import React, { Component } from "react";
import {

  Container,
} from "reactstrap";
import "./style.css";
import UploadPhotoForm from "../../components/UploadPhotoForm/UploadPhotoForm";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import GalleryDND from "../../components/GalleryDND/GalleryDND";
import axios from "axios";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      savedPhotos: []
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  getPhotos = () => {
    this.dbGet(`/api/adminSavedPhoto`).then(response => this.setState({savedPhotos: response.data}));
  }

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
      <Container>
        <h1>Admin</h1>
        <h2>Add a Photo</h2>
        <UploadPhotoForm />
        <h3>Saved Photos</h3>
        {this.state.savedPhotos.map((photo, index) => (
        <GalleryCard photo={photo} key={index}></GalleryCard>
        ))}
        <h3>Assets for Pages</h3>
        <h3>Gallery Ordering</h3>
        <GalleryDND />
      </Container>
    );
  }
}

export default Admin;
