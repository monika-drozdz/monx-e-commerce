import React, { Component } from 'react';

import './homepage.styles.scss';

import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CardItem from '../CollectionItem/collection-item.component';
import Directory from '../Directory/directory.component';
import ButtonUp from '../ButtonUp/button-up.component';
import Logo from '../Logo/logo.component';

import EcoIcon from '@material-ui/icons/Eco';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

import SimpleSlider from '../Slider/slider.component';
import SectionHeader from '../sectionHeader/sectionHeader.components';

const Homepage = () => (
<div className="app">
        <SimpleSlider className="slider"/>
        <SectionHeader>NOWOŚCI</SectionHeader>
        <div className="card-preview">
          {/* {
              collection.slice(0,3).map((item) => (
                  // <Link to={`/swiece/${item.id + 1}`} style={{ textDecoration: "none"}}>
                      <CardItem key={item.id} item={item}/>
                  // </Link>
              ))
          } */}
        </div>
        <SectionHeader>KATEGORIE</SectionHeader>
        <Directory />
        <SectionHeader>ZAPEWNIAMY</SectionHeader>
        <div className="banner">
          <div className="extras">
            <div><LocalShippingIcon style={{ fontSize: 50 }}/></div>
            <h4>szybka dostawa</h4>
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
)

const mapStateToProps = createStructuredSelector({
  collection: selectCollection
});

export default connect(mapStateToProps)(Homepage);
