import React from 'react';

import './cart-item.styles.scss';

import { connect } from 'react-redux';
import { clearItem } from '../../redux/cart/cart.actions';

import ClearIcon from '@material-ui/icons/Clear';

const CartItem = ({item, clearItem}) => {
    const {name, price, imageUrl, quantity} = item;
    console.log(item);
    return(
    <div className='cart-item'>
        <div className="cart-image" style={{backgroundImage: `url(${imageUrl})`,}} ></div>
        <div className="delete-icon">
        <ClearIcon onClick={() => clearItem(item)} />
        </div>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity}szt. * {price}PLN
            </span>
        </div>
    </div>
    )
}
    
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);