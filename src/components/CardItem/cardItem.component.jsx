import React, { Component } from 'react';
import "./cardItem.styles.scss";
import {Route, Link} from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ProductPage from '../ProductPage/product-page.component';

class CardItem extends Component {
    constructor(props){
        super(props);
        this.state = { 
            
         }
    }
    
    

    render() { 
        return ( 
<div>

{/* <Link to={{
     pathname: `/product`,
     state: {
         name: this.props.name
        }
}
} className="link-to-product" > */}
   
    <div className="card">    
        
        <div className="card-icons">
        <FavoriteBorderIcon style={{ fontSize: 30 }} className="fav-shop-icon"/>
        <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} className="fav-shop-icon"/>
        </div>
        <img className="card-image" src={this.props.image} alt=""/>
        
        <div className="card-content">
            <span>{this.props.name}</span>
            <span style={{color:"#C1745F"}}>{this.props.price}</span>
        </div>
    </div>
    <Route exact path="/swiece/:key" render={(props) => <ProductPage {...props} items={this.props.items}/>}/>
    {/* </Link> */}
    </div>
         );
    }
}
 

export default CardItem;

