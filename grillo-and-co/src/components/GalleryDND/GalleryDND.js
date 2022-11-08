import React, { Component } from "react";
import axios from "axios";
//import RLDD from "react-list-drag-and-drop/lib/RLDD";
import "./style.css";

class GalleryDND extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.itemRenderer = this.itemRenderer.bind(this);
    this.handleRLDDChange = this.handleRLDDChange.bind(this);
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
  // componentWillReceiveProps(nextProps) {
  //   this.getPhotos();
  // }

  itemRenderer(item, index) {
    return (
      <div className="item">
        <p className="title">{item.title}</p>
        <p className="body">{item.body}</p>
        <img
          className="image"
          src={require(`../../images/${item.photoInfo.name}`)}
          alt={item.keyword}
        ></img>
        <div className="small">
          item.id: {item.id} - index: {index}
        </div>
      </div>
    );
  }

  handleRLDDChange(newItems) {
    this.setState({ items: newItems });
    newItems.forEach((item, index) => {
      this.dbPut(`/api/adminSavedPhoto/${item._id}`, index);
      // .then((response) => {
      //   console.log(response);
      // });
    });
  }

  // render() {
  //   const items = this.state.items;
  //   return (
  //     // <RLDD
  //     //   cssClasses="example"
  //     //   items={items}
  //     //   itemRenderer={this.itemRenderer}
  //     //   onChange={this.handleRLDDChange}
  //     // />
  //   );
  // }
}

export default GalleryDND;

// import React from "react";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardImg,
//   CardTitle,
//   CardText,
//   FormGroup,
//   Label,
//   Input
// } from "reactstrap";
// // import "./style.css";
// import DraggableList from "react-draggable-list"
// //import image from "../../images/Alix.jpg";

// const card = {
//   width: "25%",
//   float: "left"
// };
// const list = [
//     {
//      itemKey: 1,
//      "test", "test2"];
// // const p = {
// //   position: "relative",
// //   top: "200px",
// //   color: "#C2B8A0",
// //   textShadow: "-1px 1px 0 #2B2214",
// //   fontSize: "24px",
// // };
// // const button = {
// //   position: "relative",
// //   top: "210px",
// //   left: "100px",
// //   borderRadius: "30px",
// //   color: "#C2B8A0",
// //   boxShadow: "-1px 1px 0 #2B2214",
// //   borderColor: "#2B2214",
// // };

// const GalleryDND = (props) => {
//   return (
//   <div  style={card}>
//     <DraggableList list={list}/>
//   </div>)
// };

// export default GalleryDND;

// // import React, { Component } from "react";
// // import ReactMotion from "react-motion";
// // import { Motion, spring } from "react-motion";
// // import _ from "underscore";

// // const dataStructure = [
// //   // structure that models our initial rendered view of items
// //   [0, 1, 2],
// //   [3, 4, 5, 6, 7],
// //   [8, 9, 10, 11],
// // ];

// // const reinsert = (array, colFrom, rowFrom, colTo, rowTo) => {
// //   const _array = array.slice(0);
// //   const val = _array[colFrom][rowFrom];
// //   _array[colFrom].splice(rowFrom, 1);
// //   _array[colTo].splice(rowTo, 0, val);
// //   calculateVisiblePositions(_array);
// //   return _array;
// // };

// // const gutterPadding = 21;
// // const clamp = (n, min, max) => Math.max(Math.min(n, max), min);
// // const getColumnWidth = () =>
// //   window.innerWidth / dataStructure.length -
// //   gutterPadding / dataStructure.length; // spread columns over available window width
// // const height = 110; // crappy fixed item height :(

// // let width = getColumnWidth(),
// //   layout = null;

// // // items are ordered by their index in this visual positions array
// // const calculateVisiblePositions = (newOrder) => {
// //   width = getColumnWidth();
// //   layout = newOrder.map((column, col) => {
// //     return _.range(column.length + 1).map((item, row) => {
// //       return [width * col, height * row];
// //     });
// //   });
// // };

// // // define spring motion opts
// // const springSetting1 = { stiffness: 180, damping: 10 };
// // const springSetting2 = { stiffness: 150, damping: 16 };

// // class GalleryDND extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       order: dataStructure,
// //       lastPress: null,
// //       currentColumn: null,
// //       isPressed: false,
// //       mouse: [0, 0],
// //       isResizing: false,
// //       delta: [0, 0],
// //     };
// //   }
// //   // getInitialState() {
// //   //     return {
// //   //         mouse: [0, 0],
// //   //         delta: [0, 0], // difference between mouse and item position, for dragging
// //   //         lastPress: null, // key of the last pressed component
// //   //         currentColumn: null,
// //   //         isPressed: false,
// //   //         order: dataStructure, // index: visual position. value: component key/id
// //   //         isResizing: false
// //   //     };
// //   // };

// //   componentWillMount() {
// //     this.resizeTimeout = null;
// //     calculateVisiblePositions(dataStructure);
// //     console.log(this.state);
// //   }

// //   componentDidMount() {
// //     window.addEventListener("touchmove", this.handleTouchMove);
// //     window.addEventListener("mousemove", this.handleMouseMove);
// //     window.addEventListener("touchend", this.handleMouseUp);
// //     window.addEventListener("mouseup", this.handleMouseUp);
// //     window.addEventListener("resize", this.handleResize);
// //   }

// //   componentWillUnmount() {
// //     window.removeEventListener("resize", this.handleResize);
// //   }

// //   handleTouchStart(key, currentColumn, pressLocation, e) {
// //     this.handleMouseDown(key, currentColumn, pressLocation, e.touches[0]);
// //   }

// //   handleTouchMove(e) {
// //     e.preventDefault();
// //     this.handleMouseMove(e.touches[0]);
// //   }

// //   handleMouseMove({ pageX, pageY }) {
// //     // let dx = this.state.delta[0];
// //     // let dy = this.state.delta[1];
// //     // if (this.state.isPressed) {
// //     //   const mouse = [pageX - dx, pageY - dy];
// //     //   const colTo = clamp(Math.floor((mouse[0] + width / 2) / width), 0, 2);
// //     //   const rowTo = clamp(Math.floor((mouse[1] + height / 2) / height), 0, 100);
// //     //   const rowFrom = this.state.order[this.state.currentColumn].indexOf(
// //     //     this.state.lastPress
// //     //   );
// //     //   const newOrder = reinsert(
// //     //     this.state.order,
// //     //     this.state.currentColumn,
// //     //     rowFrom,
// //     //     colTo,
// //     //     rowTo
// //     //   );
// //     //   this.setState({
// //     //     mouse,
// //     //     order: newOrder,
// //     //     currentColumn: colTo,
// //     //   });
// //     //}
// //   }

// //   handleMouseDown(key, currentColumn, [pressX, pressY], { pageX, pageY }) {
// //     // this.setState({
// //     //   lastPress: key,
// //     //   currentColumn: currentColumn,
// //     //   isPressed: true,
// //     //   delta: [pageX - pressX, pageY - pressY],
// //     //   mouse: [pressX, pressY],
// //     // });
// //   }

// //   handleMouseUp() {
// //     this.setState({
// //       isPressed: false,
// //       delta: [0, 0],
// //     });
// //   }

// //   handleResize() {
// //     clearTimeout(this.resizeTimeout);
// //     this.applyResizingState(true);
// //     // resize one last time after resizing stops, as sometimes this can be a little janky sometimes...
// //     this.resizeTimeout = setTimeout(() => this.applyResizingState(false), 100);
// //   }

// //   applyResizingState(isResizing) {
// //     this.setState({ isResizing });
// //     calculateVisiblePositions(dataStructure);
// //   }

// //   render() {
// //     return (
// //       <div className="items">
// //         {this.state.order.map((column, colIndex) => {
// //           return column.map((row) => {
// //             let style,
// //               x,
// //               y,
// //               visualPosition = this.state.order[colIndex].indexOf(row),
// //               isActive =
// //                 row === this.state.lastPress &&
// //                 colIndex === this.state.currentColumn &&
// //                 this.state.isPressed;

// //             if (isActive) {
// //               [x, y] = this.state.mouse;
// //               style = {
// //                 translateX: x,
// //                 translateY: y,
// //                 scale: spring(1.1, springSetting1),
// //               };
// //             } else if (this.state.isResizing) {
// //               [x, y] = layout[colIndex][visualPosition];
// //               style = {
// //                 translateX: x,
// //                 translateY: y,
// //                 scale: 1,
// //               };
// //             } else {
// //               [x, y] = layout[colIndex][visualPosition];
// //               style = {
// //                 translateX: spring(x, springSetting2),
// //                 translateY: spring(y, springSetting2),
// //                 scale: spring(1, springSetting1),
// //               };
// //             }

// //             return (
// //               <Motion key={row} style={style}>
// //                 {({ translateX, translateY, scale }) => (
// //                   <div
// //                     onMouseDown={this.handleMouseDown.bind(
// //                       null,
// //                       row,
// //                       colIndex,
// //                       [x, y]
// //                     )}
// //                     onTouchStart={this.handleTouchStart.bind(
// //                       null,
// //                       row,
// //                       colIndex,
// //                       [x, y]
// //                     )}
// //                     className={isActive ? "item is-active" : "item"}
// //                     style={{
// //                       WebkitTransform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
// //                       transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
// //                       zIndex:
// //                         row === this.state.lastPress &&
// //                         colIndex === this.state.currentColumn
// //                           ? 99
// //                           : visualPosition,
// //                     }}
// //                   >
// //                     Item {row + 1}
// //                   </div>
// //                 )}
// //               </Motion>
// //             );
// //           });
// //         })}
// //       </div>
// //     );
// //   }
// // }

// // export default GalleryDND;
