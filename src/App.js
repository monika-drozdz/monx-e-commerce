import React from 'react';

import './App.css';
import Header from './components/Header/header.component';
import Homepage from './components/Homepage/homepage.component';
import SignIn from './components/SignIn/sign-in.component';
import Footer from './components/Footer/footer.component';
import ShopPage from './components/ShopPage/shop-page.component';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.component';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CheckoutPage from './components/CheckoutPage/checkout-page.component';


const App = () =>(
<div className="app">
      <Router>
        <ScrollToTop/>
      <Header/>
        <Switch>
        <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path="/signin" component={SignIn}/>
        </Switch>
      <Footer/>
      </Router>
    </div>

)
  
export default App;
