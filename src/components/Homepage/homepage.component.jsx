import React, { Component } from 'react';

import './homepage.styles.scss';

import {Link} from 'react-router-dom';

import CardItem from '../CardItem/cardItem.component';
import MenuPreview from '../MenuPreview/menu-preview.component';
import ButtonUp from '../ButtonUp/button-up.component';
import Logo from '../Logo/logo.component';

import EcoIcon from '@material-ui/icons/Eco';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

import SimpleSlider from '../Slider/slider.component';
import SectionHeader from '../sectionHeader/sectionHeader.components';

class Homepage extends Component {

  render() {
      return (
      <div className="app">
        <div>
          <Logo />
        </div>
        <SimpleSlider className="slider"/>
        <SectionHeader>NOWOŚCI</SectionHeader>
        <div className="card-preview">
          {
              this.props.items.slice(0,3).map((item, idx) => (
                  <Link key={item.idx} to={`/swiece/${idx + 1}`} style={{ textDecoration: "none"}}>
                      <CardItem key={item.idx}
                      name={item.name}
                      price={item.price}
                      image={item.image}/>
                  </Link>
              ))
          }
        </div>
        <SectionHeader kat>KATEGORIE</SectionHeader>
        <MenuPreview />
        <SectionHeader>ZAPEWNIAMY</SectionHeader>
        <div className="banner">
          <div className="extras">
            <div><LocalShippingIcon style={{ fontSize: 50 }}/></div>
            <h4>darmowa dostawa</h4>
          </div>
          <div className="vertical-line"></div>
          <div className="extras">
            <div><EcoIcon style={{ fontSize: 50 }}/></div>
            <h4>ekologiczne składniki</h4>
          </div>
          <div className="vertical-line"></div>
          <div className="extras">
            <div><LoyaltyIcon style={{ fontSize: 50 }}/></div>
            <h4>produkowane z sercem</h4>
          </div>
        </div>
        <ButtonUp scrollStepInPx="20" delayInMs="16.66" />
        <div className="post"></div>
      </div>
    )} 
  }
export default Homepage;
