import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./style.css";

const h1 = {
  position: "relative",
  top: "180px",
};
const p = {
  position: "relative",
  textAlign: "center",
  top: "200px",
  color: "white",
  textShadow: "-1px 1px 0 #A99D99",
  fontSize: "24px",
};
const button = {
  backgroundColor: "#3B160C",
  position: "relative",
  top: "210px",
  left: "100px",
  borderRadius: "30px",
  color: "white",
  boxShadow: "-1px 1px 0 #A99D99",
  borderColor: "#3B160C",
};

const Carousel = (props) => {
  return (
    <Slider autoplay={50000}>
      {props.content.map((item, index) => (
        <div
          key={index}
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="center">
            <h2 style={h1}>{item.title}</h2>
            <p style={p}>{item.description}</p>
            <button style={button}>{item.button}</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
