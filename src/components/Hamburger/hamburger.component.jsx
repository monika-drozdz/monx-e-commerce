import React from "react";

import "./hamburger.styles.scss";

import { connect } from "react-redux";
import { toggleNavBarHidden } from "../../redux/navbar/navbar.actions";

const Hamburger = ({ toggleNavBarHidden, hiddenMenu }) => {
	return (
		<div
			className={hiddenMenu ? "hamburger" : "hamburger open"}
			onClick={toggleNavBarHidden}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleNavBarHidden: () => dispatch(toggleNavBarHidden()),
});

export default connect(null, mapDispatchToProps)(Hamburger);
