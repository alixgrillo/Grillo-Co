import React, { Component } from "react";
import {
  Container,
  Row,
  FormGroup,
  Label,
  CustomInput,
  Form,
  Button,
  Input,
} from "reactstrap";
import "./style.css";
import UploadPhotoForm from "../../components/UploadPhotoForm/UploadPhotoForm";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import GalleryDND from "../../components/GalleryDND/GalleryDND";
import PhotoOrder from "../../components/PhotoOrder/PhotoOrder";
import axios from "axios";

const password = process.env.REACT_APP_ADMIN;
class Admin extends Component {
  constructor() {
    super();
    this.state = {
      savedPhotos: [],
      aboutUsPhoto: "",
      loggedin: false,
      enteredPassword: "",
      photosToOrder: [],
      maxGalleryOrder: 0,
    };
  }

  componentDidMount() {
    if (this.state.loggedin) {
      this.getPhotos();
    }
  }
  // componentWillUnmount() {
  //   this.setState({
  //     loggedin: false,
  //     enteredPassword: "",
  //   });
  // }
  componentDidUpdate() {}

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };
  updateCard = () => {
    this.getPhotos();
  };
  onClickHandler = (event) => {
    event.preventDefault();
    this.updateDB(this.state);
  };
  getPhotos = () => {
    this.dbGet(`/api/adminSavedPhoto`).then((response) => {
      console.log(
        response.data.reduce((prev, current) =>
          prev.y > current.y ? prev : current
        ).galleryOrder
      );
      this.setState({
        savedPhotos: response.data.sort((a, b) =>
          a.galleryOrder > b.galleryOrder ? 1 : -1
        ),
        photosToOrder: response.data
          .filter((a) => a.inGallery)
          .sort((a, b) => (a.galleryOrder > b.galleryOrder ? 1 : -1)),
        loggedin: true,
        maxGalleryOrder:
          response.data.length == 0
            ? 0
            : response.data.reduce((prev, current) =>
                prev.y > current.y ? prev : current
              ).galleryOrder,
      });
    });
    this.dbGet(`/api/other`).then((response) => {
      if (response.data.length > 0) {
        this.setState({
          aboutUsPhoto: response.data[0].aboutUsPhoto,
        });
      }
    });
  };
  updateDB = (state) => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      aboutUsPhoto: state.aboutUsPhoto,
    };
    this.dbPut(requestOptions).then((data) =>
      this.setState({ aboutUsPhoto: data.data.aboutUsPhoto })
    );
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
  login = (e) => {
    e.preventDefault();
    if (this.state.enteredPassword === password) {
      this.setState({
        loggedin: true,
      });
      this.getPhotos();
    }
  };

  render() {
    return (
      <Container className="container-block">
        <h1>Admin</h1>
        {this.state.loggedin ? (
          <div>
            <Row>
              <h3>Add a Photo</h3>
              <UploadPhotoForm
                maxGalleryOrder={this.state.maxGalleryOrder}
                updateCard={this.updateCard}
              />
            </Row>
            <Row>
              <h3>Saved Photos</h3>
              {this.state.savedPhotos.map((photo, index) => (
                <GalleryCard
                  photo={photo}
                  key={index}
                  updateCard={this.updateCard}
                ></GalleryCard>
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
              {/* <GalleryDND savedPhotos={this.state.photosToOrder} /> */}
              <PhotoOrder savedPhotos={this.state.photosToOrder} />
            </Row>
          </div>
        ) : (
          <Form>
            <FormGroup>
              <Label for="examplePassword">Please enter your password</Label>
              <Input
                value={this.state.enteredPassword}
                type="text"
                name="enteredPassword"
                id="examplePassword"
                onChange={this.handleInputChange}
              />
              <Button onClick={this.login}>Submit</Button>
            </FormGroup>
          </Form>
        )}
      </Container>
    );
  }
}

export default Admin;
