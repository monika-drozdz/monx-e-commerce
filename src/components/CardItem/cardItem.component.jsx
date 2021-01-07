import React, { Component } from 'react';
import "./cardItem.styles.scss";
//import {Route, Link} from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
//import ProductPage from '../ProductPage/product-page.component';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CardItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    
    return(
        <div className="card">    
            <div className="card-icons">
                <FavoriteBorderIcon style={{ fontSize: 30 }} className="fav-shop-icon"/>
                <ShoppingCartOutlinedIcon onClick={() => addItem(item)} style={{ fontSize: 30 }} className="fav-shop-icon"/>
            </div>
            <div className="card-image"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})`,
              }}
            >
            </div>
            
            <div className="card-content">
                <span>{name}</span>
                <span style={{color:"#C1745F"}}>{price}</span>
            </div>
        </div>
        // <Route exact path="/swiece/:key" render={(props) => <ProductPage {...props} items={this.props.items}/>}/>
        // {/* </Link> */}
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CardItem);

