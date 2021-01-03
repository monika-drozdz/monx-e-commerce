import React, { Component } from 'react';
import './menu-item.styles.scss';
import CartButton from '../CartButton/cartButton.component';

const MenuItem = ( {name, image } ) => (
        <div className="menu-item">
            <div className="background">
                <img className="menu-image" src={image} alt=""/>
            </div>
            <div className="content">
            <CartButton>{name}</CartButton>
            </div>
        </div>
);

 export default MenuItem;