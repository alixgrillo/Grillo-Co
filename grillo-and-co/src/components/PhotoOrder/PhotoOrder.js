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
import axios from "axios";
import RLDD from "react-list-drag-and-drop/lib/RLDD";

class PhotoOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    // this.itemRenderer = this.itemRenderer.bind(this);
    // this.handleRLDDChange = this.handleRLDDChange.bind(this);
  }

  getPhotos = () => {
    this.dbGet(`/api/adminSavedPhoto`).then((response) => {
      let items = response.data.filter((photo) => photo.inGallery);
      items = items.map((item, index) => {
        item.id = item.galleryOrder ? item.galleryOrder : 1;
        item.body = item.photoInfo.name;
        return item;
      });
      this.setState({ items: items });
    });
  };

  dbGet = async (url) => {
    const response = await axios.get(url);
    const body = await response;
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  dbPut = async (url, order) => {
    const response = await axios.put(url, {
      galleryOrder: order,
    });
    const body = await response;
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  componentDidMount() {
    this.getPhotos();
  }
  static getDerivedStateFromProps(props, state) {
    if (props.savedPhotos !== state.items) {
      let items = props.savedPhotos.filter((photo) => photo.inGallery);
      items = items.map((item, index) => {
        item.id = item.galleryOrder ? item.galleryOrder : 1;
        item.body = item.photoInfo.name;
        return item;
      });
      console.log(items);
      return {
        items: items,
      };
    }
    // Return null to indicate no change to state.
    return null;
  }
  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
    console.log(event.currentTarget);

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };
  onClickHandler = (event) => {
    event.preventDefault();
    console.log();
  };
  // componentWillReceiveProps(nextProps) {
  //   this.getPhotos();
  // }

  //   itemRenderer(item, index) {
  //     return (
  //       <div className="item">
  //         <p className="title">{item.title}</p>
  //         <p className="body">{item.body}</p>
  //         <img
  //           className="image"
  //           src={require(`../../images/${item.photoInfo.name}`)}
  //           alt={item.keyword}
  //         ></img>
  //         <div className="small">
  //           item.id: {item.id} - index: {index}
  //         </div>
  //       </div>
  //     );
  //   }

  //   handleRLDDChange(newItems) {
  //     this.setState({ items: newItems });
  //     newItems.forEach((item, index) => {
  //       this.dbPut(`/api/adminSavedPhoto/${item._id}`, index);
  //       // .then((response) => {
  //       //   console.log(response);
  //       // });
  //     });
  //   }

  render() {
    const items = this.state.items;
    return (
      <div>
        <Form>
          {this.state.items.map((photo, index) => (
            <FormGroup key={index}>
              <Label for="title">{photo.title}</Label>
              <img
                style={{ height: "100px", width: "100px" }}
                src={require(`../../images/${photo.photoInfo.name}`)}
              ></img>
              <Input
                type="text"
                value={
                  this.state.items.filter((a) => a._id === photo._id)
                    .galleryOrder
                }
                onChange={this.handleInputChange}
                name="galleryOrder"
                id={photo._id}
                placeholder={photo.galleryOrder}
              />
            </FormGroup>
          ))}
          <Button type="submit" onClick={this.onClickHandler}>
            Save Order
          </Button>
        </Form>
      </div>
    );
  }
}

export default PhotoOrder;
