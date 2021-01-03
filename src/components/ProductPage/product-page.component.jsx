import React, { Component } from 'react';

import './product-page.styles.scss';
import product from '../../assets/sol.jpg';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import CustomButton from '../../components/CustomButton/custom-button.component';
import Logo from '../../components/Logo/logo.component';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class ProductPage extends Component {
    constructor(props) {
        super(props)
    
    this.state = { 
        count: 1,
        image: `${product}`,
        name: "SÓL do KĄPIELI - KWIATY BZU",
        price: "25PLN",
        description: "Sól do kąpieli z właściwościami nawilżającymi, odprężającymi.",
        ingredients: "Sól z morza Martwego, sól himalajska, olejek jojoba, olejek makadamia, olejki eteryczne: bez, magnolia, płatki suszonych kwiatów",
    }
    
    }

    
     increment=() => {
         this.setState({count:this.state.count+1});
         console.log(this.props.name)
         }
     
    decrement=() => {
        if (this.state.count > 1) {
            this.setState({count:this.state.count-1})
        }
    }

    render () {
        return ( 
            <div>
            
        <Link to='/'>
          <Logo />
        </Link>
    
    
            <div className="product-container">
                <div className="product-images">
               
                    <img className="img-large" src={this.state.image}></img>
                    
                    
                    
                </div>
                <div className="product-desc">
                    <div className="description-container">
                    <div className="product-title">{this.state.name}
                        
                    </div>
                    <div className="subtitle">
                        <div className="product-price">{this.state.price}</div>
                        <div className="rating">
                            <StarBorderIcon className="star-icon"/>
                            <StarBorderIcon className="star-icon"/>
                            <StarBorderIcon className="star-icon"/>
                            <StarBorderIcon className="star-icon"/>
                            <StarBorderIcon className="star-icon"/>
                        </div>
                    </div>
                    <div className="description">
                        <p>{this.state.description}</p>
                        <span>Skład: {this.state.ingredients}</span> 
                    </div>
                    </div>
                    <div className="buttons-container">
                       
                       <div className="qty-button"> 
                       <RemoveIcon className="minus-plus-btn" onClick={this.decrement}></RemoveIcon>
                            <span className="qty">{this.state.count}</span>
                        <AddIcon className="minus-plus-btn" onClick={this.increment}></AddIcon>
                            
                            
                            {/* <button className="minus-plus-btn" onClick={this.decrement}><RemoveIcon/></button>
                            <span className="qty">{this.state.count}</span>
                            <button className="minus-plus-btn" onClick={this.increment}><AddIcon/></button> */}
                        </div>
                        <CustomButton>DODAJ DO KOSZYKA</CustomButton>
                    </div>
                </div>


            </div></div>
         );
    }
}
 
export default ProductPage;