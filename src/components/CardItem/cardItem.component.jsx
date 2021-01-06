import React, { Component } from 'react';
import "./cardItem.styles.scss";
//import {Route, Link} from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
//import ProductPage from '../ProductPage/product-page.component';
const CardItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    return(
        <div className="card">    
            <div className="card-icons">
                <FavoriteBorderIcon style={{ fontSize: 30 }} className="fav-shop-icon"/>
                <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} className="fav-shop-icon"/>
            </div>
            <img className="card-image" src={`${process.env.PUBLIC_URL}${imageUrl}`} alt=""/>
            <div className="card-content">
                <span>{name}</span>
                <span style={{color:"#C1745F"}}>{price}</span>
            </div>
        </div>
        // <Route exact path="/swiece/:key" render={(props) => <ProductPage {...props} items={this.props.items}/>}/>
        // {/* </Link> */}
    );
}


export default CardItem;

