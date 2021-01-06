import React, { Component } from 'react';
import CardItem from '../CardItem/cardItem.component';
import candle from '../../assets/candle.jpg';
import Logo from "../../components/Logo/logo.component";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux'; 

import './candle-page.styles.scss';

const CandlePage = ({candles}) => (
    <div>

        <Link to='/'>
            <Logo/>
        </Link>

    <div className="products-preview">
        {
            candles.items.map(( item ) => (
                <Link key={item.id} to={`/swiece/${item.id + 1}`} style={{ textDecoration: "none"}}>
                    <CardItem key={item.id}
                    item={ item } />
                </Link>
            ))
        }

    </div></div>
)

const mapStateToProps = (state) => ({
    candles: state.candles.items
});

export default connect(mapStateToProps)(CandlePage);