import React, { Component } from 'react';
import './logo.styles.scss';
import {ReactComponent as LogoMonx} from "../../assets/logo.svg";

const Logo = () => (
    <div className="logo">
      <LogoMonx className="monx" />
    </div>
)

export default Logo;