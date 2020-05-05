import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './style.css';

const Carousel = (props) => {
return (
<Slider autoplay={50000}>
	{props.content.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.image}') no-repeat center center` }}
		>
			<div className="center">
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<button>{item.button}</button>
			</div>
		</div>
	))}
</Slider>
)};

export default Carousel;