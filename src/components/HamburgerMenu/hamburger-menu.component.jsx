import React from "react";

import "./hamburger-menu.styles.scss";

import NavBar from "../NavBar/navbar.component";
import Hamburger from "../Hamburger/hamburger.component";

import { connect } from "react-redux";

const HamburgerMenu = ({ hiddenMenu }) => {
	return (
		<div className="hamburger-menu">
			<Hamburger hiddenMenu={hiddenMenu} />
			{hiddenMenu ? null : <NavBar />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	hiddenMenu: state.navbar.hiddenMenu,
});

export default connect(mapStateToProps)(HamburgerMenu);
