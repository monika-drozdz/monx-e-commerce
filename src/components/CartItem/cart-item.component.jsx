import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item}) => {
    const {name, price, imageUrl, quantity} = item;
    console.log(item);
    return(
    <div className='cart-item'>
        <div className="cart-image" style={{backgroundImage: `url(${imageUrl})`,}} ></div>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity}szt. * {price}PLN
            </span>
        </div>
    </div>
    )
}
    

export default CartItem;