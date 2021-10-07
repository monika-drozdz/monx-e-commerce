import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
	children,
	isGoogleSignIn,
	goToCheckout,
	isMenu,
	isFooter,
	isCateg,
	...otherProps
}) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
			goToCheckout ? "go-to-checkout" : ""
		} ${isMenu ? "menu-button" : ""} ${isFooter ? "footer-btn" : ""} ${
			isCateg ? "category-btn" : ""
		} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
