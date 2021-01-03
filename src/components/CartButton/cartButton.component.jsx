import React from 'react';
import './cartButton.styles.scss'

const CartButton = ({children}) => (
    <div className="buttons">
        <div className="btn">
          <span>{children}</span>
        </div>
    </div>
)

export default CartButton;