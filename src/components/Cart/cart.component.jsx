import React, { Component } from 'react';

import './cart.styles.scss';
import CustomButton from '../../components/CustomButton/custom-button.component';
import Logo from '../../components/Logo/logo.component';
import {Link} from 'react-router-dom';
import candle from '../../assets/candle.jpg'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class Cart extends Component {
    constructor(){
        super()
        this.state = { 
            cartItems: [
            {   
                key: 1,
                name: "ŚWIECZKA LAWENDA",
                price: "24PLN",
                count: 1,
                image: `${candle}`
            },
            {   
                key: 2,
                name: "SÓL DO KĄPIELI",
                price: "26PLN",
                count: 1,
                image: `${candle}`
            },
            {
                key: 3,
                name: "KULKA DO KĄPIELI MANDARYNKA",
                price: "9PLN",
                count: 1,
                image: `${candle}`
            }

            ]
            
            
       }
    }
    
    increment = () => {
        this.setState({count:(this.state.cartItems[0].count+1)});
        console.log(this.state.cartItems[0].count)
        }
    
   decrement = () => {
       if (this.state.cartItems.count > 1) {
           this.setState({count:this.state.count-1})
       }
   }

    render(
        
    ) { 
        return ( 
            <div>
            <Link to='/'>
                <Logo />
            </Link>
            <div className="cart-container">
                <h1>KOSZYK</h1>
                <div className="row">
                        <h3>
                            ZDJĘCIE
                        </h3>
                        <h3>
                            NAZWA
                        </h3>
                        <h3>
                            ILOŚĆ
                        </h3>
                        <h3>
                            CENA
                        </h3>
                </div>
                {
                    
                    this.state.cartItems.map((item, index) => (

                        <div key={index} className="row">
                        <div className='image-container'>
                            <img src={item.image} alt='item'/>
                        </div>
                        <div>
                            {item.name}
                        </div>
                        <div className="qty-button"> 
                        <RemoveIcon className="minus-plus-btn" onClick={this.decrement}></RemoveIcon>
                            <span className="qty">{this.state.count}</span>
                        <AddIcon className="minus-plus-btn" onClick={this.increment}></AddIcon>
                            
                            {/* <button className="minus-plus-btn" onClick={this.decrement}>&#8722;</button>
                            <span className="qty">{item.count}</span>
                            <button className="minus-plus-btn" onClick={this.increment}>&#43;</button> */}
                        </div>
                        
                        <div>
                            {item.price}
                        </div>
                        
                        <ClearIcon className="delete-icon"/>
                        </div>

                    ))
                }
                <div className="row row-last">
                        <div>
                        </div>
                        <div>
                        </div>
                        <h3>
                            SUMA:
                        </h3>
                        <div>Price</div>
                        <CustomButton style={{ backgroundColor: "#004C4E" }}>ZAPŁAĆ</CustomButton>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Cart;