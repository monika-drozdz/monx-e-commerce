import React, { Component } from 'react';

import "./header.styles.scss"

import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Logo from '../Logo/logo.component'
import CartDropdown from '../CartDropdown/cart-dropdown.component';
import CartIcon from '../CartIcon/cart-icon.component';

import { Link } from "react-router-dom";

import { connect } from 'react-redux';



const Header = ( {hidden} ) => {
console.log(hidden);
return (

  <div className="header">
    <Link to={'/'}><Logo/></Link>
    <div className="logo-container">
    
      <div className="icons">
        
        <div className="search-container">
          <input id="search" name="search" type="text" placeholder="Szukaj"/>
        <SearchIcon className="search-icon" style={{ fontSize: 20 }} />
          </div>
        {/* <Link to="/favourite" className="icon" style={{ color: "#f2f2f2", textDecoration: "none" }}><FavoriteBorderIcon className="icon" style={{ fontSize: 20 }}/></Link> */}
        <Link to="/signin" className="icon" style={{ color: "#f2f2f2", textDecoration: "none" }} ><AccountCircleOutlinedIcon className="icon" style={{ fontSize: 20 }}/></Link>
        <CartIcon/>
      </div> 
      {
        hidden ? null :
        <CartDropdown/>
      }
      
    </div>

    <div className="navbar">
    
      <div className="category">
          <Link to='/shop/candles'>
            <div className="nav-link">
              ŚWIECE</div>
          </Link>
          
      </div>

      <div className="category">
          <Link to='/shop/salts'>
            <div className="nav-link">
              SOLE
            </div>
          </Link>
      </div>

      <div className="category">
          <Link to='/shop/bathbombs'>
            <div className="nav-link">
              KULE
            </div>
          </Link>
      </div>

      <div className="category">
          <Link to='/shop/zapachy'>
            <div className="nav-link">
              ZAPACHY
            </div>
          </Link>
      </div>

      <div className="category">
          <Link to='/shop/inne'>
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

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header);





