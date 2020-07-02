import React, { Component } from "react";
// import Slider from "react-animated-slider";
// // import Carousel from "react-bootstrap/Carousel";
// // import "react-animated-slider/build/horizontal.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./style.css";

class CarouselP extends Component {
  constructor() {
    super();
    this.state = {
      slides: null,
    };

    this.loadSlides = this.loadSlides.bind(this);
  }
  componentDidMount() {
    this.loadSlides();
    console.log(this.state);
  }

  loadSlides = () => {
    console.log(this.props.content);
    this.setState(
      {
        slides: this.props.content,
      },
      console.log(this.state)
    );
  };
  render() {
    // return <Carousel>{this.state.slides}</Carousel>;
    return (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={1000}
        stopOnHover={true}
        // renderItem={customRenderItem}
        // renderThumbs={customRenderThumb}
      >
        <div className="carousel-image">
          <Link to={`/aboutus`}>
            <img
              className="img-box"
              src={require(`../../images/award winning design.jpg`)}
            ></img>
            <div className="text">
              <h2>Award Winning Designs</h2>
              <p style={{ textAlign: "center" }}>Read more about Grillo & Co</p>
            </div>
          </Link>
        </div>
        <div className="carousel-image">
          <Link to={`/gallery`}>
            <img src={require(`../../images/pepperwood table.jpg`)}></img>
            <div className="text">
              <h2>Functional Art</h2>
              <p style={{ textAlign: "center" }}>
                See more furniture by Grillo & Co
              </p>
            </div>
          </Link>
        </div>
        <div className="carousel-image">
          <Link to={`/faq`}>
            <img
              src={require(`../../images/planing wood in workshop.jpg`)}
            ></img>
            <div className="text">
              <h2>Hand Craftsmanship</h2>
              <p style={{ textAlign: "center" }}>
                Get more information on woodworking
              </p>
            </div>
          </Link>
        </div>
      </Carousel>
    );
  }
}

export default CarouselP;

// = (props) => {
//   var settings = {
//     infiniteLoop: true,
//     autoPlay: true,
//     transitionTime: 500,
//     stopOnHover: true,
//   };
//   // const [index, setIndex] = useState(0);
//   const [auto, setauto] = useState(false);

// const handleSelect = (selectedIndex, e) => {
//   setIndex(selectedIndex);
// };
//   const customRenderItem = () => (
//     props.content.map((item, index) => (

//       return (
// <div
//           key={index}
//           // style={{
//           //   background: `url('../../images/${item.image}' no-repeat center center`,
//           // }}
//         >
//           {/* <div className="center"> */}
//           <img
//             className="carousel-image"
//             alt={item.description}
//             src={require(`../../images/${item.image}`)}
//           />
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//           {/* <button style={button}>{item.button}</button> */}
//           {/* </div> */}
//         </div>
//       )
//       ))
//   );
//   //
//   // if (!props) return <div>Images are not fetched yet!</div>;
//   useEffect(() => {
//     setauto(true);
//     console.log(auto);
//   }, [props.content, auto]);

//   const item = (
//     <div>
//       <img src={require(`../../images/award winning design.jpg`)}></img>
//       <p>Award Winning Designs</p>
//     </div>
//   );
//   const customRenderThumb = (children) =>
//         children.map((item) => {
//             const videoId = getVideoId(item.props.url);
//             return <img src={getVideoThumb(videoId)} />;
//         });

//   // let image = require(`../../images/award winning design.jpg`);

// const customRenderItem = (item, props) =>
//   React.createElement(
//     "div",
//     { className: "carousel-div" },
//     React.createElement("img"),
//     { src: image }
//   );
/*
  return (
    <Carousel
      autoPlay={false}
      infiniteLoop={true}
      transitionTime={1000}
      stopOnHover={true}
      renderItem={customRenderItem}
      renderThumbs={customRenderThumb}>
    >
      <div>
        <img src={require(`../../images/award winning design.jpg`)}></img>
        <p>Award Winning Designs</p>
      </div>
      <div>
        <img src={require(`../../images/pepperwood table.jpg`)}></img>
      </div>
      <div>
        <img src={require(`../../images/planing wood in workshop.jpg`)}></img>
      </div>
    </Carousel>
  );
};

export default CarouselP;

const Test = (props) => {
  return (
    <div>
      <img src={require(`../../images/award winning design.jpg`)}></img>
      <p>Award Winning Designs</p>
    </div>
  );
};



/*

import React, { useState, useEffect } from "react";
// import Slider from "react-animated-slider";
// // import Carousel from "react-bootstrap/Carousel";
// // import "react-animated-slider/build/horizontal.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./style.css";

const CarouselP = (props) => {
  var settings = {
    infiniteLoop: true,
    autoPlay: true,
    transitionTime: 500,
    stopOnHover: true,
  };
  // const [index, setIndex] = useState(0);
  const [auto, setauto] = useState(false);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  const customRenderItem = () => (
    props.content.map((item, index) => (

      return (
<div
          key={index}
          // style={{
          //   background: `url('../../images/${item.image}' no-repeat center center`,
          // }}
//         >
//           {/* <div className="center"> */
//           <img
//             className="carousel-image"
//             alt={item.description}
//             src={require(`../../images/${item.image}`)}
//           />
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//           {/* <button style={button}>{item.button}</button> */}
//           {/* </div> */}
//         </div>
//       )
//       ))
//   ); /*
//   //
//   // if (!props) return <div>Images are not fetched yet!</div>;
//   useEffect(() => {
//     setauto(true);
//     console.log(auto);
//   }, [props.content, auto]);

//   const item = (
//     <div>
//       <img src={require(`../../images/award winning design.jpg`)}></img>
//       <p>Award Winning Designs</p>
//     </div>
//   );
//   const customRenderThumb = (children) =>
//         children.map((item) => {
//             const videoId = getVideoId(item.props.url);
//             return <img src={getVideoThumb(videoId)} />;
//         });

//   // let image = require(`../../images/award winning design.jpg`);

//   // const customRenderItem = (item, props) =>
//   //   React.createElement(
//   //     "div",
//   //     { className: "carousel-div" },
//   //     React.createElement("img"),
//   //     { src: image }
//   //   );

//   return (
//     <Carousel
//       autoPlay={false}
//       infiniteLoop={true}
//       transitionTime={1000}
//       stopOnHover={true}
//       renderItem={customRenderItem}
//       renderThumbs={customRenderThumb}>
//     >
//       <div>
//         <img src={require(`../../images/award winning design.jpg`)}></img>
//         <p>Award Winning Designs</p>
//       </div>
//       <div>
//         <img src={require(`../../images/pepperwood table.jpg`)}></img>
//       </div>
//       <div>
//         <img src={require(`../../images/planing wood in workshop.jpg`)}></img>
//       </div>
//     </Carousel>
//   );
// };

// export default CarouselP;

// const Test = (props) => {
//   return (
//     <div>
//       <img src={require(`../../images/award winning design.jpg`)}></img>
//       <p>Award Winning Designs</p>
//     </div>
//   );
// };

// // {props.content.map((item, index) => (
// //   <div
// //     key={index}
// //     // style={{
// //     //   background: `url('../../images/${item.image}' no-repeat center center`,
// //     // }}
// //   >
// //     {/* <div className="center"> */}
// //     <img
// //       className="carousel-image"
// //       alt={item.description}
// //       src={require(`../../images/${item.image}`)}
// //     />
// //     <h2>{item.title}</h2>
// //     <p>{item.description}</p>
// //     {/* <button style={button}>{item.button}</button> */}
// //     {/* </div> */}
// //   </div>
// // ))}
// // {props.content.map((item, index) => (
// //   <div
// //     key={index}
// //     // style={{
// //     //   background: `url('../../images/${item.image}' no-repeat center center`,
// //     // }}
// //   >
// //     {/* <div className="center"> */}
// //     <img
// //       className="carousel-image"
// //       alt={item.description}
// //       src={require(`../../images/${item.image}`)}
// //     />
// //     <h2>{item.title}</h2>
// //     <p>{item.description}</p>
// //     {/* <button style={button}>{item.button}</button> */}
// //     {/* </div> */}
// //   </div>
// // ))}

// // const h1 = {
// //   position: "relative",
// //   top: "180px",
// // };
// // const p = {
// //   position: "relative",
// //   textAlign: "center",
// //   top: "200px",
// //   color: "white",
// //   textShadow: "-1px 1px 0 #A99D99",
// //   fontSize: "24px",
// // };
// // const button = {
// //   backgroundColor: "#3B160C",
// //   position: "relative",
// //   top: "210px",
// //   left: "100px",
// //   borderRadius: "30px",
// //   color: "white",
// //   boxShadow: "-1px 1px 0 #A99D99",
// //   borderColor: "#3B160C",
// // };

// // return (
// //   <Slider autoplay={50000}>
// //     {props.content.map((item, index) => (
// //       <div
// //         key={index}
// //         style={{
// //           background: `url('../../images/${item.image}' no-repeat center center`,
// //         }}
// //       >
// //         <div className="center">
// //           {/* <img
// //             className="carousel-image"
// //             src={require(`../../images/${item.image}`)}
// //           /> */}
// //           <h2 style={h1}>{item.title}</h2>
// //           <p style={p}>{item.description}</p>
// //           <button style={button}>{item.button}</button>
// //         </div>
// //       </div>
// //     ))}
// //   </Slider>
// // );

// // return (
// //   <Carousel activeIndex={index} onSelect={handleSelect}>
// //     <Carousel.Item>
// //       <img
// //         className="d-block w-100"
// //         src={require(`../../images/award winning design.jpg`)}
// //         alt="First slide"
// //       />
// //       <Carousel.Caption>
// //         <h3>First slide label</h3>
// //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// //       </Carousel.Caption>
// //     </Carousel.Item>
// //     <Carousel.Item>
// //       <img
// //         className="d-block w-100"
// //         src={require(`../../images/award winning design.jpg`)}
// //         alt="Second slide"
// //       />

// //       <Carousel.Caption>
// //         <h3>Second slide label</h3>
// //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //       </Carousel.Caption>
// //     </Carousel.Item>
// //     <Carousel.Item>
// //       <img
// //         className="d-block w-100"
// //         src={require(`../../images/award winning design.jpg`)}
// //         alt="Third slide"
// //       />

// //       <Carousel.Caption>
// //         <h3>Third slide label</h3>
// //         <p>
// //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
// //         </p>
// //       </Carousel.Caption>
// //     </Carousel.Item>
// //   </Carousel>
// // );
