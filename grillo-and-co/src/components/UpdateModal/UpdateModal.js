import React, { useState, useEffect } from "react";
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
} from "reactstrap";
// import "./style.css";
import UploadPhotoForm from "../UploadPhotoForm/UploadPhotoForm";

function UpdateModal(props) {
  // const [show, setShow] = useState(props.show);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <p> PLEASE WORK</p>
      {/* <Header closeButton>
          <Title id="contained-modal-title-vcenter">
            Modal heading
          </Title>
        </Header> */}

      <Button onClick={props.onHide}>Close</Button>
    </Modal>
  );
}

export default UpdateModal;
