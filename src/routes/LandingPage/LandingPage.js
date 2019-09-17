import React, { Component } from 'react'
// import { Section } from '../../components/Utils/Utils'
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import './LandingPage.css'
// import Footer from "./components/footer";
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
  render() {
    return (
      <section className="container">
      
<section className="hero">

        <section className="head">
      
        <h2 className="heroh2">Reconceptualize< br/>your home</h2>
        

            <div>
            
              <p>We’ll help you find a place you’ll love <br/>OR <br/> Share the place you love.</p>
              <div className='hero__btn__div'> 
              <Link
              className="hero__btn"
          to='/listMyPropertyPage'>
          List my property
        </Link>
        <Link
              className="hero__btn"
          to='/Properties'>
          Lets see our properties 
        </Link>
       
        </div>
            </div>
        </section>
       
      </section >
      <section className="main">
        <section className="intro">
            <h2 className="landingPageh2">About Us</h2>
            <div>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className="fas fa-door-open"></i></p>
                <p className="service-title">Buy a home</p>
                <p className="service-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i className="fas fa-money-bill-wave"></i></p>
                <p className="service-title">Sell a home</p>
                <p className="service-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i className="fas fa-retweet"></i></p>
                <p className="service-title">rent a home</p>
                <p className="service-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua frefrfr erg re greg.</p>
              
          </div>
        </div>

            </div>


        
        <div className="gallery">
         <div className="gallery-item-one radious"></div>
         <div className="gallery-item-two radious"></div>
         <div className="gallery-item-three radious"></div>
         <div className="gallery-item-four radious"></div>
         <div className="gallery-item-five radious"></div>
         <div className="gallery-item-six radious"></div>
         
        </div>

        <section>
            <h2 className="landingPageh2">Our Agent</h2>
            <div>
            <p className="ourAgent__icon"><i className="far fa-user-circle"></i></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
              </div>
        </section>


        <section>
            <h2 className="landingPageh2" id="contactUs">Contact Us</h2>
            <ContactUsForm />
          
        </section>

      </section>
      </section>
    )
  }
}
