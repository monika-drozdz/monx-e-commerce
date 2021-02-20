import React from 'react';

import './cart-dropdown.styles.scss';

import CartItem from '../../components/CartItem/cart-item.component';
import CustomButton from '../../components/CustomButton/custom-button.component';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ? (
                cartItems.map(cartItem => 
                (<CartItem key={cartItem.id} item={cartItem}/>))
            ) : (
                <span  className="empty-message">Puuuuuusto</span>
            )
            }    
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>IDŹ DO KOSZYKA</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));
