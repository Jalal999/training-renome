import React from 'react';
import "./contact.scss";
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { TiSocialGooglePlusCircular } from 'react-icons/ti';
import logo from '../../assets/img/Renome.svg';

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="contact__title">follow us:</h2>
            <div className="contact__icons">
                <a href="https://www.facebook.com/" target="_blank"><TiSocialFacebookCircular className="contact__icons__icon" /></a>
                <a href="https://twitter.com/" target="_blank"><TiSocialTwitterCircular className="contact__icons__icon" /></a>
                <a href="https://www.google.com/" target="_blank"><TiSocialGooglePlusCircular className="contact__icons__icon" /></a>
            </div>
            <img src={logo} className="contact__logo"/>
            <h3 className="contact__copyright">copyright 2021 renome by estetiq</h3>
        
        </div>
    );
};

export default Contact;