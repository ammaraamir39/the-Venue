import React, { Component } from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';



import Header from './resources/Components/header_footer/Header';
import Featured from './resources/Components/featured/index';
import VenueNfo from './resources/Components/venueInfo/index';
import Highlight from './resources/Components/Highlights/Index';
import Pricing from './resources/Components/Pricing/Pricingindex';
import Location from './resources/Components/Location/Location';
import Footer from './resources/Components/header_footer/Footer';



//import slide_one from './resources/Components/featured/images/slide_one.jpg';
class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'1500px'}}>
        <Header/> 
        <Element name="featured">
          <Featured />
        </Element>
        
        <Element name="venueinfo">
          <VenueNfo />
        </Element>
        
        <Element name="highlights">
           <Highlight />
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>
        
        <Element name="location">
           <Location/>  
        </Element>
       
        <Footer/>
      </div>
    );
  }
}

export default App;
