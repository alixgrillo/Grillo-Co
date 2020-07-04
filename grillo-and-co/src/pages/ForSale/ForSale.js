import React, { Component } from "react";

import { Container } from "reactstrap";

// import axios from "axios";
import "./style.css";
// import GalleryCardDisplay from "../../components/GalleryCardDisplay/GalleryCardDisplay";

class ForSale extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       galleryPhotos: [],
  //     };
  //   }

  //   componentDidMount() {
  //     this.getPhotos();
  //   }

  //   getPhotos = () => {
  //     this.dbGet(`/api/adminSavedPhoto`).then((response) =>
  //       this.setState({
  //         galleryPhotos: response.data
  //           .filter((photo) => photo.inGallery)
  //           .sort((a, b) => (a.galleryOrder > b.galleryOrder ? 1 : -1)),
  //       })
  //     );
  //   };

  //   dbGet = async (url) => {
  //     const response = await axios.get(url);
  //     const body = await response;
  //     if (response.status !== 200) {
  //       throw Error(body.message);
  //     }
  //     return body;
  //   };

  render() {
    return (
      <Container className="container-block">
        <h1>For Sale</h1>
        <p>Please check back later as we are eagerly working on new items.</p>
        {/* <div className="gallery-cards">
          <Row>
            {this.state.galleryPhotos.map((photo, index) => (
              <Col lg={4} key={index}>
                <GalleryCardDisplay photo={photo}></GalleryCardDisplay>
              </Col>
            ))}
          </Row>
        </div> */}
      </Container>
    );
  }
}

export default ForSale;
