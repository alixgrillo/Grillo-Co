import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./style.css";
import UploadPhotoForm from "../UploadPhotoForm/UploadPhotoForm";
import axios from "axios";
//import image from "../../images/Alix.jpg";

const card = {
  width: "25%",
  float: "left",
};
// const p = {
//   position: "relative",
//   top: "200px",
//   color: "#C2B8A0",
//   textShadow: "-1px 1px 0 #2B2214",
//   fontSize: "24px",
// };
// const button = {
//   position: "relative",
//   top: "210px",
//   left: "100px",
//   borderRadius: "30px",
//   color: "#C2B8A0",
//   boxShadow: "-1px 1px 0 #2B2214",
//   borderColor: "#2B2214",
// };

const GalleryCard = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  const [saveToGallery, setSaveToGallery] = useState(props.photo.inGallery);

  const toggle = () => setModal(!modal);
  const saveToGalleryById = (e) => {
    setSaveToGallery(e.target.checked);
    updatePostDB(e.target.checked);
    props.updateCard();
  };

  const updatePostDB = (checkbox) => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      inGallery: checkbox,
    };
    dbPut(requestOptions, props.photo._id);
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };
  const dbPut = async (requestOptions, id) => {
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

  return (
    <div style={card}>
      <Card className="gallery-card">
        <CardImg
          top
          width="30%"
          className="gallery-image"
          src={require(`../../images/${props.photo.photoInfo.name}`)}
          alt={props.photo.keyword}
        />
        <CardBody>
          <CardTitle>{props.photo.title}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>{props.photo.description}</CardText>
          <Button id={props.photo._id} onClick={toggle}>
            Update Information
          </Button>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="checkbox2"
                value={props.photo.inGallery}
                checked={props.photo.inGallery}
                onChange={saveToGalleryById}
              />{" "}
              Include in Gallery
            </Label>
          </FormGroup>
        </CardBody>
      </Card>
      {this.props.width < 470 ? (
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={className}
          id="modal-gallery"
        >
          <ModalHeader toggle={toggle}>Update Information</ModalHeader>
          <ModalBody>
            <UploadPhotoForm
              modal={true}
              id={props.photo._id}
              title={props.photo.title}
              description={props.photo.description}
              keyword={props.photo.keyword}
            />
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GalleryCard;
