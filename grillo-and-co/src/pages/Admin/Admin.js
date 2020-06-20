import React, { Component } from "react";
import {
  Container,
  Row,
  FormGroup,
  Label,
  CustomInput,
  Form,
  Button,
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
      savedPhotos: [],
      aboutUsPhoto: "",
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
    console.log(value, name);
  };

  onClickHandler = (event) => {
    event.preventDefault();
    this.updateDB(this.state);
  };
  getPhotos = () => {
    this.dbGet(`/api/adminSavedPhoto`).then((response) =>
      this.setState({
        savedPhotos: response.data.sort((a, b) =>
          a.galleryOrder > b.galleryOrder ? 1 : -1
        ),
      })
    );
    this.dbGet(`/api/other`).then((response) => {
      console.log(response.data);
      this.setState(
        {
          aboutUsPhoto: response.data[0].aboutUsPhoto,
        },
        console.log(this.state)
      );
    });
  };
  updateDB = (state) => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      aboutUsPhoto: state.aboutUsPhoto,
    };
    console.log(state.aboutUsPhoto);
    this.dbPut(requestOptions).then((data) => console.log(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  dbGet = async (url) => {
    const response = await axios.get(url);
    const body = await response;
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  dbPut = async (requestOptions) => {
    const response = await axios.post(`/api/other`, requestOptions);
    const body = await response;
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <Container style={{ marginBottom: "100px" }}>
        <h1>Admin</h1>
        <Row>
          <h3>Add a Photo</h3>
          <UploadPhotoForm />
        </Row>
        <Row>
          <h3>Saved Photos</h3>
          {this.state.savedPhotos.map((photo, index) => (
            <GalleryCard photo={photo} key={index}></GalleryCard>
          ))}
        </Row>
        <Row>
          <h3>Assets for Pages</h3>
          <Form>
            <FormGroup>
              <Label for="exampleCustomSelect">About Us Picture</Label>
              <CustomInput
                type="select"
                id="exampleCustomSelect"
                name="aboutUsPhoto"
                onChange={this.handleInputChange}
                value={this.state.aboutUsPhoto}
              >
                <option value="">Select</option>
                {this.state.savedPhotos.map((photo, index) => (
                  <option key={index}>
                    {photo.title} : {photo.photoInfo.name}
                  </option>
                ))}
              </CustomInput>
            </FormGroup>
            <Button type="submit" onClick={this.onClickHandler}>
              Save
            </Button>
          </Form>
        </Row>
        <Row>
          <h3>Gallery Ordering</h3>
          <GalleryDND savedPhotos={this.state.savedPhotos} />
        </Row>
      </Container>
    );
  }
}

export default Admin;