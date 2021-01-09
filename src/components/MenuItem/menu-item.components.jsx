import React from 'react';

import './menu-item.styles.scss';

import CategoryButton from '../CategoryButton/category-button.component';

const MenuItem = ( {name, image } ) => (
        <div className="menu-item">
            <div className="menu-image" 
            style={{
                backgroundImage: `url(${image})`,
            }}>
            </div>
            <div className="content">
            <CategoryButton>{name}</CategoryButton>
            </div>
        </div>
);

 export default MenuItem;