import React from 'react';

import CollectionItem from '../CollectionItem/collection-item.component';
import { withRouter, Link } from 'react-router-dom';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, routeName, items, history, match }) => {
  console.log(match);
  return(
  <div className='collection-preview'>

<h1 className='collection-title' onClick={()=> history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</h1>
 

    
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)};

export default withRouter(CollectionPreview);
