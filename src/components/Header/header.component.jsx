import React, { Component } from 'react';

import "./header.styles.scss"

import SearchIcon from '@material-ui/icons/Search';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import { Link } from "react-router-dom";



const Header = () => {

return (

  <div className="header">
    <div className="logo-container">
      <div className="icons">
        <div className="search-container">
          <input id="search" name="search" type="text" placeholder="Szukaj"/>
        <SearchIcon className="search-icon" style={{ fontSize: 20 }} />
          </div>
        <Link to="/favourite" className="icon" style={{ color: "#f2f2f2", textDecoration: "none" }}><FavoriteBorderIcon className="icon" style={{ fontSize: 20 }}/></Link>
        <Link to="/cart" className="icon" style={{ color: "#f2f2f2", textDecoration: "none" }}><ShoppingCartOutlinedIcon className="icon" style={{ fontSize: 20 }}/></Link>
        <Link to="/signin" className="icon" style={{ color: "#f2f2f2", textDecoration: "none" }} ><AccountCircleOutlinedIcon className="icon" style={{ fontSize: 20 }}/></Link>
      </div> 
    </div>

    <div className="navbar">
    
      <div className="category">
          <Link to='/swiece'>
            <div className="nav-link">
              ŚWIECE</div>
          </Link>
          
      </div>

      <div className="category">
          <Link to='/sole'>
            <div className="nav-link">
              SOLE
            </div>
          </Link>
      </div>

      <div className="category">
          <Link to='/kule'>
            <div className="nav-link">
              KULE
            </div>
          </Link>
      </div>

      <div className="category">
          <Link to='/akcesoria'>
            <div className="nav-link">
              AKCESORIA
            </div>
          </Link>
      </div>

      <div className="category">
          <Link to='/inne'>
            <div className="nav-link">
            INNE
            </div>
          </Link>
      </div>

      <div className="category">
          <Link to='/kontakt'>
            <div className="nav-link">
            KONTAKT
            </div>
          </Link>
      </div>
    </div>
  </div>);
};

export default Header;





