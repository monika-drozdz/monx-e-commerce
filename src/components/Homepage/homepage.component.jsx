import React from "react";

import "./homepage.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";

import Directory from "../Directory/directory.component";
import ButtonUp from "../ButtonUp/button-up.component";
import Extras from "../Extras/extras.component";

import SimpleSlider from "../Slider/slider.component";

const Homepage = () => (
	<div className="app">
		<SimpleSlider className="slider" />
		<Directory />
		<Extras />
		<ButtonUp scrollStepInPx="20" delayInMs="16.66" />
	</div>
);

const mapStateToProps = createStructuredSelector({
	collection: selectCollection,
});

export default connect(mapStateToProps)(Homepage);
