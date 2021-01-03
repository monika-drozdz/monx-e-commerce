import React, { Component } from 'react';
import CardItem from '../CardItem/cardItem.component';
import candle from '../../assets/candle.jpg';
import Logo from "../../components/Logo/logo.component";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import {productData} from '../../data/product-data.js';
import ProductPage from '../../components/ProductPage/product-page.component';

import './candle-page.styles.scss';

class CandlePage extends Component {
    constructor(props) {
        super(props);

        this.state = {

            items: [
                {
                    key: "1",
                    name: "POMARAŃCZA & GOŹDZIKI",
                    price: "25PLN",
                    image: `${candle}`,
                },
                {
                    key: "2",
                    name: "LAWENDA",
                    price: "32PLN",
                    image: `${candle}`,
                },
                {
                    key: "3",
                    name: "BEZ & PALMAROSA",
                    price: "35PLN",
                    image: `${candle}`,
                },
                {
                    key: "4",
                    name: "CYTRYNA & MIĘTA",
                    price: "28PLN",
                    image: `${candle}`,
                },
                {
                    key: "5",
                    name: "CYNAMON & JABŁKO",
                    price: "28PLN",
                    image: `${candle}`,
                },
                {
                    key: "6",
                    name: "EUKALIPTUS & MANDARYNKA",
                    price: "22PLN",
                    image: `${candle}`,
                },
                {
                    key: "7",
                    name: "GREJPFRUT & ANYŻ",
                    price: "24PLN",
                    image: `${candle}`,
                },
                {
                    key: "8",
                    name: "LAWENDA & NIAOULI",
                    price: "23PLN",
                    image: `${candle}`,
                },
            ]
        }

    }
    render() {
        const {items} = this.state
        return (
   <div>

      <Link to='/'>
          <Logo/>
        </Link>
    

<div className="products-preview">
    {
        items.map((item, idx) => (
            <Link key={item.idx} to={`/swiece/${idx + 1}`} style={{ textDecoration: "none"}}>
                <CardItem key={item.idx}
                name={item.name}
                price={item.price}
                image={item.image}/>
            </Link>
        ))
    }



</div></div>

         );
    }
}

export default CandlePage;