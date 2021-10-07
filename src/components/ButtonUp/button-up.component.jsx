import React, { Component } from "react";
import "./button-up.styles.scss";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";

class ButtonUp extends Component {
	constructor() {
		super();

		this.state = {
			intervalId: 0,
		};
	}

	scrollStep() {
		if (window.pageYOffset === 0) {
			clearInterval(this.state.intervalId);
		}
		window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
	}

	scrollToTop() {
		let intervalId = setInterval(
			this.scrollStep.bind(this),
			this.props.delayInMs
		);
		this.setState({ intervalId: intervalId });
	}

	render() {
		return (
			<div
				className="btn-up"
				onClick={() => {
					this.scrollToTop();
				}}
			>
				<ArrowDropUpOutlinedIcon style={{ fontSize: 30 }} className="icon-up" />
			</div>
		);
	}
}

export default ButtonUp;
