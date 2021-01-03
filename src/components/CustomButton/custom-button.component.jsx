import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, likek, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${likek ? 'likek' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
