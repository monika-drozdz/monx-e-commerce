import React from "react";

import "./footer.styles.scss";

import { Link } from "react-router-dom";

import {
	Facebook,
	Instagram,
	Email,
	Pinterest,
	Place,
	Phone,
} from "@material-ui/icons";

const Footer = () => (
	<div className="footer">
		<div className="footer-center">
			<div className="logo-text">
				<Link to={process.env.PUBLIC_URL + "/"}>
					<h2>Monx</h2>
				</Link>
			</div>

			<div className="address-container">
				<div className="address">
					<Place className="social-icon" />
					<span>ul. Pana Liko 7 , 30-022 Lisiec </span>
				</div>

				<div className="address">
					<Email className="social-icon" />
					<span>mailkontaktowy@gmail.com</span>
				</div>
				<div className="address">
					<Phone className="social-icon" style={{ fontSize: 24 }} />
					<span>+48 888 888 888</span>
				</div>
			</div>
			<div className="footer-map-container">
				<div className="footer-map">
					<ul>
						<Link to="/shop/candles">
							<li>ŚWIECE SOJOWE</li>
						</Link>
						<Link to="/shop/bathbombs">
							<li>KULE DO KĄPIELI</li>
						</Link>
						<Link to="/shop/salts">
							<li>SÓL DO KĄPIELI</li>
						</Link>
						<Link to="/shop/zapachy">
							<li>TABLICZKI ZAPACHOWE</li>
						</Link>
					</ul>
					<ul>
						<Link to="/signin">
							<li>LOGOWANIE</li>
						</Link>
						<Link to="/checkout">
							<li>KOSZYK</li>
						</Link>
					</ul>
				</div>
			</div>
			<div className="social-icons">
				<a href="#facebook">
					<Facebook className="social-icon" />
				</a>
				<a href="#instagram">
					<Instagram className="social-icon" />
				</a>
				<a href="#pinterest">
					<Pinterest className="social-icon" />
				</a>
			</div>
		</div>

		<div className="copyright">
			<span>
				&#169;2021. monx. Wszystkie prawa zastrzeżone &#8226; Polityka
				prywatności{" "}
			</span>
		</div>
	</div>
);

export default Footer;
