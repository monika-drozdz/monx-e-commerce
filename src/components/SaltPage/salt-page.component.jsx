import React, { Component } from 'react';
import CardItem from '../CardItem/cardItem.component';
import salt from '../../assets/salt.jpg'
import {ReactComponent as Logo} from "../../assets/logo.svg";
import {BrowserRouter as Router, Link} from 'react-router-dom';
// import {productData} from '../../data/product-data.js';

import './salt-page.styles.scss';

class SaltPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            
            items: [
                {
                    key: "1",
                    name: "SÓL HIMALAJSKA",
                    price: "25PLN",
                    image: `${salt}`,
                },
                {
                    key: "2",
                    name: "LAWENDA",
                    price: "32PLN",
                    image: `${salt}`,
                },
                {
                    key: "3",
                    name: "BEZ & PALMAROSA",
                    price: "35PLN",
                    image: `${salt}`,
                },
                {
                    key: "4",
                    name: "CYTRYNA & MIĘTA",
                    price: "28PLN",
                    image: `${salt}`,
                },
                {
                    key: "5",
                    name: "CYNAMON & JABŁKO",
                    price: "28PLN",
                    image: `${salt}`,
                },
                {
                    key: "6",
                    name: "EUKALIPTUS & MANDARYNKA",
                    price: "22PLN",
                    image: `${salt}`,
                },
                {
                    key: "7",
                    name: "GREJPFRUT & ANYŻ",
                    price: "24PLN",
                    image: `${salt}`,
                },
                {
                    key: "8",
                    name: "CYTRYNA & MIĘTA",
                    price: "23PLN",
                    image: `${salt}`,
                },
            ]
        }

    } 
    render() { 
        return ( 
   <div>      
{/* <div className="logo">
      <Link to='/'>
          <Logo className="monx"/>
        </Link>
    </div> */}

<div className="products-preview">
    {
        this.state.items.map((item, idx) => (
            <CardItem key={idx}
            name={item.name}
            price={item.price}
            image={item.image}/>
        ))
    }
</div></div>

         );
    }
}
 
export default SaltPage;