import React from 'react';

import './cart-dropdown.styles.scss';

import CartItem from '../../components/CartItem/cart-item.component';
import CustomButton from '../../components/CustomButton/custom-button.component';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => 
                (<CartItem key={cartItem.id} item={cartItem}/>))
            }    
        </div>
        <CustomButton>IDŹ DO KOSZYKA</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));
