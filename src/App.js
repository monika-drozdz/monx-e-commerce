import React from 'react';

import './App.css';
import Header from './components/Header/header.component';
import Homepage from './components/Homepage/homepage.component';
import SignIn from './components/SignIn/sign-in.component';
import Footer from './components/Footer/footer.component';
import ShopPage from './components/ShopPage/shop-page.component';

import ProductPage from './components/ProductPage/product-page.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CheckoutPage from './components/CheckoutPage/checkout-page.component';
//import {ToastController} from 'react-toasify-redux';

const App = () =>(
<div className="app">
      <Router>
      <Header/>
      {/* <ToastController/> */}
        <Switch>
        <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path="/signin" component={SignIn}/>
        </Switch>
        
      </Router>
      <Footer/>
    </div>

)
  
export default App;
