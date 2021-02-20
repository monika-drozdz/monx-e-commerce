import React from 'react';

import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
import CategoryButton from '../CategoryButton/category-button.component';

const MenuItem = ( {title, imageUrl, linkUrl, history, match } ) => (
        <div className="menu-item" onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className="menu-image" 
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}>
            </div>
            <div className="content">
            <CategoryButton >{title}</CategoryButton>
            </div>
        </div>
);

 export default withRouter(MenuItem);