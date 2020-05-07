import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './style.css';

const h1 = {
	position: "relative",
	top: "180px"
}
const p = {
	position: "relative",
	top: "200px",
	color: "#C2B8A0",
    textShadow: "-1px 1px 0 #2B2214",
	fontSize: "24px"			
}
const button = {
	position: "relative",
	top: "210px",
	left: "100px",
	borderRadius: "30px",
	color: "#C2B8A0",
	boxShadow: "-1px 1px 0 #2B2214",
	borderColor: "#2B2214"
}

const Carousel = (props) => {
return (
<Slider autoplay={3000}>
	{props.content.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.image}') no-repeat center center` }}
		>
			<div className="center">
				<h1 style={h1}>{item.title}</h1>
				<p style={p}>{item.description}</p>
				{/* <button style={button}>{item.button}</button> */}
			</div>
		</div>
	))}
</Slider>
)};

export default Carousel;