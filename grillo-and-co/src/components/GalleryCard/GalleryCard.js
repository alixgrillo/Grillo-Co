import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "./style.css";
//import image from "../../images/Alix.jpg";

const card = {
  width: "25%",
  float: "left"
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
  return (
  <div  style={card}>
    <Card>
      <CardImg top width="30%" src={require(`../../images/${props.photo.photoInfo.name}`)} alt={props.photo.keyword} />
      <CardBody>
        <CardTitle>{props.photo.title}</CardTitle>
        {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
        <CardText>{props.photo.description}</CardText>
        <Button id={props.photo._id}>Button</Button>
        <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Include in Gallery
            </Label>
          </FormGroup>
      </CardBody>
    </Card>
  </div>)
};

export default GalleryCard;
