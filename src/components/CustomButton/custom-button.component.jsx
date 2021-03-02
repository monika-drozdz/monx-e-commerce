import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, goToCheckout, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${goToCheckout ? 'go-to-checkout' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
