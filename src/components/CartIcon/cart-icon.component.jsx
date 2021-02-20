import React from 'react';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ( { toggleCartHidden, itemCount } ) => (
    <div className="cart-icon">
        <ShoppingCartOutlinedIcon onClick={toggleCartHidden} className="icon" style={{ fontSize: 20 }}/>
        <div className="item-count">
         <span>{ itemCount }</span>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 

const mapStateToProps = (state) => ({
 itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);