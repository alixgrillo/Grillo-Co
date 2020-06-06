import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Modal,
  ModalHeader, 
  ModalBody, 
  ModalFooter,
} from "reactstrap";

import UploadPhotoForm from "../UploadPhotoForm/UploadPhotoForm";
import axios from "axios";
//import image from "../../images/Alix.jpg";
import "./style.css";



const GalleryCardDisplay = (props) => {
  console.log(props);
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
//   const [modalShow, setModalShow] = useState(false);
//   const [saveToGallery, setSaveToGallery] = useState(props.photo.inGallery);

  const toggle = () => setModal(!modal);
//   const saveToGalleryById = (e) => {
//     console.log(e.target.checked);
//     setSaveToGallery(e.target.checked);
//     updatePostDB(e.target.checked);
//   }

  const updatePostDB = (checkbox) => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      inGallery: checkbox
    };
    dbPut(requestOptions, props.photo._id).then(data => console.log(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };
  const dbPut = async (requestOptions, id) => {
    const response = await axios.put(`/api/adminSavedPhoto/${id}`, requestOptions);
    const body = await response;
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  return (
  <div>
      {/* <Col lg={4}> */}
      <Card className="gallery-card" onClick={toggle}>
   
      <CardImg className="gallery-image" src={require(`../../images/${props.photo.photoInfo.name}`)} alt={props.photo.keyword} />
      <CardBody>
        <CardTitle className="gallery-title">{props.photo.title}</CardTitle>
        {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
        <CardText className="gallery-description">{props.photo.description}</CardText>
       </CardBody>
    </Card>
      {/* </Col> */}
    
    <Modal className="picture-modal" isOpen={modal} toggle={toggle}>
        <ModalBody>
        <CardImg className="gallery-image-modal" src={require(`../../images/${props.photo.photoInfo.name}`)} alt={props.photo.keyword} />
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
  </div>)
};

export default GalleryCardDisplay;
