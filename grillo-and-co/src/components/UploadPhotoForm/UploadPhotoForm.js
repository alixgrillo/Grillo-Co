import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./style.css";
import axios from "axios";

class UploadPhotoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      selectedFile: "",
      title: "",
      description: "",
      keyword: "",
      galleryOrder: 0,
      maxGalleryOrder: 0,
    };
    //this.updateCard = this.props.updateCard().bind(this);
  }

  componentDidMount() {
    if (this.props.modal) {
      this.setState({
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        keyword: this.props.keyword,
      });
    }
    this.setState({
      maxGalleryOrder: this.props.maxGalleryOrder,
    });
  }
  static getDerivedStateFromProps(props, state) {
    if (props.maxGalleryOrder !== state.maxGalleryOrder) {
      return {
        maxGalleryOrder: props.galleryOrder,
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  onClickHandler = (event) => {
    event.preventDefault();
    const data = new FormData();

    data.append("file", this.state.selectedFile);
    axios
      .post("/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
    if (!this.props.modal) {
      this.updateDB(this.state);
      // this.updateCard();
    } else {
      this.updatePostDB(this.state);
    }

    this.setState({
      selectedFile: "",
      title: "",
      description: "",
      keyword: "",
    });
  };

  updatePostDB = (state) => {
    // POST request using fetch inside useEffect React hook

    const requestOptions = {
      title: state.title,
      description: state.description,
      keyword: state.keyword,
    };
    this.dbPut(requestOptions, state.id).then((data) => console.log(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };
  dbPut = async (requestOptions, id) => {
    const response = await axios.put(
      `/api/adminSavedPhoto/${id}`,
      requestOptions
    );
    const body = await response;
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  updateDB = (state) => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      title: state.title,
      description: state.description,
      keyword: state.keyword,
      photoInfo: { name: state.selectedFile.name },
      galleryOrder: this.props.maxGalleryOrder + 1,
    };
    this.db(requestOptions);
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };
  db = async (requestOptions) => {
    const response = await axios.post(`/api/adminSavedPhoto`, requestOptions);
    const body = await response;
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="title">Photo Title</Label>
          <Input
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            id="title"
            placeholder="Display Title for Photo"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Photo Description</Label>
          <Input
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange}
            name="description"
            id="description"
            placeholder="Display Text for Photo"
          />
        </FormGroup>
        <FormGroup>
          <Label for="keyword">Keywords</Label>
          <Input
            type="text"
            value={this.state.keyword}
            onChange={this.handleInputChange}
            name="keyword"
            id="keyword"
            placeholder="Keywords associated with photo"
          />
        </FormGroup>
        {!this.props.modal ? (
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input
              type="file"
              name="file"
              id="exampleFile"
              onChange={this.onChangeHandler}
            />
            <FormText color="muted">
              Make sure the file is named the way you want to reference it
              later. It should be a unique name as well.
            </FormText>
          </FormGroup>
        ) : (
          <div></div>
        )}

        <Button type="submit" onClick={this.onClickHandler}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default UploadPhotoForm;
