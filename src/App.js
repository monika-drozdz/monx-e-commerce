import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/header.component';
import Homepage from './components/Homepage/homepage.component';
import SignIn from './components/SignIn/sign-in.component';
import Footer from './components/Footer/footer.component';
import CandlePage from './components/CandlePage/candle-page.component';
import ProductPage from './components/ProductPage/product-page.component';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SaltPage from './components/SaltPage/salt-page.component';
import candle from './assets/candle.jpg'
import Cart from './components/Cart/cart.component';


class App extends Component {
  
  state = { 
            
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

  render() { 
    return ( 
      
    <div className="app">
      <Router>
      <Header/>
      
        <Switch>
      
        <Route exact path="/">
          <Homepage items={this.state.items}/>
        </Route>
        <Route exact path="/swiece">
          <CandlePage/>
         
        </Route>
        <Route path="/sole">
          <SaltPage/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/swiece/:key">
          <ProductPage items={this.state.items}/>
        </Route> 
        </Switch>
        
      </Router>
      <Footer/>
    </div>
  
 );
  }
}
 
export default App;
