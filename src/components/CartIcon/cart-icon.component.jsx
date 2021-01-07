import React from 'react';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ( { toggleCartHidden } ) => (
    <div>
        <ShoppingCartOutlinedIcon onClick={toggleCartHidden} className="icon" style={{ fontSize: 20 }}/>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 


export default connect(null, mapDispatchToProps)(CartIcon);