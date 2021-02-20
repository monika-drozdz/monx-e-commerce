import React, { Component } from 'react';

import './product-page.styles.scss';

import {BrowserRouter as Router, Link, withRouter} from 'react-router-dom';

import CustomButton from '../../components/CustomButton/custom-button.component';
import Logo from '../../components/Logo/logo.component';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import product from '../../assets/sol.jpg';

import { connect } from 'react-redux';



const ProductPage = (item) => {

   console.log(item);
   const { imageUrl, name, price } = item.item.details
   console.log(name)
    return (
                 <div>
                 <Link to='/'>
                  <Logo />
                 </Link>
                 <div className="product-container">
                 <div className="product-images">
                     <img className="img-large" src={imageUrl}></img>
                     
                 </div>
                     <div className="product-desc">
                         <div className="description-container">
                             <div className="product-title">{name}</div>
                             <div className="subtitle">
                                 <div className="product-price">{price}</div>
                                 <div className="rating">
                                     <StarBorderIcon className="star-icon"/>
                                     <StarBorderIcon className="star-icon"/>
                                     <StarBorderIcon className="star-icon"/>
                                     <StarBorderIcon className="star-icon"/>
                                     <StarBorderIcon className="star-icon"/>
                                 </div>
                             </div>
{/* //                             <div className="description">
                                // <p>{description}</p>
//                                 <span>Skład: {ingredients}</span> 
//                             </div> */}
                         </div>
                         <div className="buttons-container">
                            <div className="qty-button"> 
{/* //                                 <RemoveIcon className="minus-plus-btn" onClick={this.decrement}></RemoveIcon> */}
                                     {/* <span className="qty">{quantity}</span> */}
                                 {/* <AddIcon className="minus-plus-btn" onClick={this.increment}></AddIcon> */} 
                             </div>
                             <CustomButton>DODAJ DO KOSZYKA</CustomButton>
                         </div>
                     </div>
                 </div>
             </div>
)
} 


const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.id)
    
    return {
        item: state.details.find(item => item.id === id)
}
  };

export default withRouter(connect(mapStateToProps)(ProductPage));