import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

import ClearIcon from '@material-ui/icons/Clear';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="qty-button">
            <div className='minus-plus-btn' onClick={() => removeItem(cartItem)}>
            &#45;
            </div>
            <span className='value'>{quantity}</span>
            <div className='minus-plus-btn' onClick={() => addItem(cartItem)}>
            &#43;
            </div>
            </div>
            
        </span>
        
        <span className="price">{price}PLN</span>
        <div className="delete-icon">
        <ClearIcon onClick={() => clearItem(cartItem)} />
        </div>

    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);