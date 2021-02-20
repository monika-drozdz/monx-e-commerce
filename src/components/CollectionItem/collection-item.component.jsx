import React, { Component } from 'react';
import "./collection-item.styles.scss";
//import {Route, Link} from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ProductPage from '../ProductPage/product-page.component';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem, history }) => {
    const { id, name, price, imageUrl } = item;
    console.log(item)
    return(
        <div className="card">    
            <div className="card-icons">
                <FavoriteBorderIcon onClick={() => history.push(`/swiece/${id}`)} style={{ fontSize: 30 }} className="fav-shop-icon"/>
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
                <span style={{color:"#C1745F"}}>{price}PLN</span>
            </div>
            {/* <Switch>
                <Route exact path="/swiece/:id" render={(props) => <ProductPage {...props} item={this.props.item}/>}/>
            </Switch> */}
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));

