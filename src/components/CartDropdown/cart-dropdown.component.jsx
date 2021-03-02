import React from 'react';

import './cart-dropdown.styles.scss';

import CartItem from '../../components/CartItem/cart-item.component';
import CustomButton from '../../components/CustomButton/custom-button.component';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems, history, total}) => (
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
        <div className="summarize">
        <span className="total-price">DO ZAPŁATY: {total} PLN </span>
        <CustomButton goToCheckout onClick={() => history.push('/checkout')}>IDŹ DO KOSZYKA</CustomButton>
        </div>
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default withRouter(connect(mapStateToProps)(CartDropdown));
