import React, { Component } from 'react';

import './checkout-page.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CustomButton from '../CustomButton/custom-button.component';
import Logo from '../Logo/logo.component';
import { Link } from 'react-router-dom';

import CheckoutItem from '../CheckoutItem/checkout-item.component';


import candle from '../../assets/candle.jpg'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const CheckoutPage = ({ cartItems, total }) => (
   
    <div>
    <div className="cart-container">
        {/* <h1>PODSUMOWANIE</h1> */}
        <div className="row">
                <div className='header-row'>
                    <span>ZDJĘCIE</span>
                </div>
                <div className='header-row'>
                    <span>NAZWA</span>
                </div>
                <div className='header-row'>
                    <span>ILOŚĆ</span>
                </div>
                <div className='header-row'>
                    <span>CENA</span>
                </div>
                <div className='header-row'>
                    <span>USUŃ</span>
                </div>
                
        </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                    )
            }
       <div className="total">
           <span>SUMA: {total}PLN </span>
       </div>
                <CustomButton>ZAPŁAĆ</CustomButton>
        </div>
    </div>
    )
   
            
    const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems,
        total: selectCartTotal
    })
 
export default connect(mapStateToProps)(CheckoutPage);