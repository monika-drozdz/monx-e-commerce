import React from 'react';

import './menu-item.styles.scss';

import CartButton from '../CartButton/cartButton.component';

const MenuItem = ( {name, image } ) => (
        <div className="menu-item">
            <div className="menu-image" 
            style={{
                backgroundImage: `url(${image})`,
            }}>
            </div>
            <div className="content">
            <CartButton>{name}</CartButton>
            </div>
        </div>
);

 export default MenuItem;