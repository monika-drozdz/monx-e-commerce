import React from "react";

import "./navbar.styles.scss";

import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="navbar">
			<ul>
				<Link to="/shop/candles">
					<li>
						<span>ŚWIECE SOJOWE</span>
					</li>
				</Link>
				<Link to="/shop/bathbombs">
					<li>
						<span>KULE DO KĄPIELI</span>
					</li>
				</Link>
				<Link to="/shop/salts">
					<li>
						<span>SÓL DO KĄPIELI</span>
					</li>
				</Link>
				<Link to="/shop/zapachy">
					<li>
						<span>TABLICZKI ZAPACHOWE</span>
					</li>
				</Link>
				<hr className="hor-line"></hr>
				<Link to="/signin">
					<li>
						<span>ZALOGUJ</span>
					</li>
				</Link>
				<Link to="/checkout">
					<li>
						<span>KOSZYK</span>
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default NavBar;
