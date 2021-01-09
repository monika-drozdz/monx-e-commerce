import React from 'react';
import './category-button.styles.scss'

const CartButton = ({children}) => (
    <div className="buttons">
        <div className="btn">
          <span>{children}</span>
        </div>
    </div>
)

export default CartButton;