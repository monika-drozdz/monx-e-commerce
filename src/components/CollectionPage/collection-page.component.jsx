import React, { Component } from 'react';
import CollectionItem from '../CollectionItem/collection-item.component';

import Logo from "../Logo/logo.component";
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 

import { selectCollection } from '../../redux/shop/shop.selectors';


import './collection-page.styles.scss';

const CollectionPage = ({collection}) => {
    const { items } = collection;
    console.log(collection);
    return (
    <div>
    <div className="products-preview">
        {
            items.map(( item ) => (
                // <Link key={item.id} to={`/swiece/${item.id}`} style={{ textDecoration: "none"}}>
                    <CollectionItem key={item.id}
                    item={ item } />
                //  </Link>
            ))
        }

    </div>
    
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);