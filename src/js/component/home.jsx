import React, { Fragment, useState } from "react";
import TrafficLight from "./trafficLight.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stopLight: "red",
		warningLight: "yellow",
		goLight: "green"
	});

	return (
		<Fragment>
			<div className="container text-center justify-content-center">
				<div className="containerLights row">
					<TrafficLight
						color={color.stopLight}
						clickChange={() => {
							setColor({
								stopLight: "red glowAngry",
								warningLight: "yellow",
								goLight: "green"
							});
						}}
					/>
					<TrafficLight
						color={color.warningLight}
						clickChange={() => {
							setColor({
								stopLight: "red",
								warningLight: "yellow glowNormal",
								goLight: "green"
							});
						}}
					/>
					<TrafficLight
						color={color.goLight}
						clickChange={() => {
							setColor({
								stopLight: "red",
								warningLight: "yellow",
								goLight: "green glowHappy"
							});
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
