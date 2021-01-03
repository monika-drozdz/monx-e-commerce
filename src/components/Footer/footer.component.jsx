import React from "react";
import "./footer.styles.scss";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Facebook, Instagram, Email, Pinterest } from "@material-ui/icons";

const Footer = () => (
			<div className="footer">
				<div className="contact-icons">
					<Facebook className="social-icon"/> 
					<Instagram className="social-icon"/>
					<Logo className="logo-footer" />
					<Email className="social-icon"/>
					<Pinterest className="social-icon"/>
				</div>
				<div className="copyright">
					<span>Polityka prywatności</span>
					<span>@2020 All rights reserved</span>
				</div>
			</div>
		);
		
export default Footer;