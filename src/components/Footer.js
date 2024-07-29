import React from 'react';
import logo from '../assets/images/footer-logo.d09eb2af6c5a2225eedf.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='logo'>
                <img src={logo} alt="logo" className='footer-img'/>
            </div>
            <div className='quick-links'>
                <ul className='footer-list k-font'>
                    <h2>QUICK LINKS</h2>
                    <li>Home</li>
                    <li><a className='nav-link' href="/about">About</a></li>
                    <li>menu</li>
                    <li>Reservations</li>
                    <li >Login</li>
                </ul>
            </div>
            <div className='contact'>
                <ul className='contact-list k-font'>
                    <h2>CONTACT</h2>
                    <li><FontAwesomeIcon icon={faMapMarker} className='icon' /> Little Lemon, Colombo 7</li>
                    <li><FontAwesomeIcon icon={faPhone} className='icon' />+94 123456789</li>
                    <li><FontAwesomeIcon icon={faEnvelope} className='icon' />littelemon@gmail.com</li>
                </ul>
            </div>
            <div className='social'>
                <ul className='social-list k-font'>
                    <h2>CONNECT WITH US</h2>
                    <div className='icon-list'>
                        <li><FontAwesomeIcon icon={faFacebook} className='icon' /></li>
                        <li><FontAwesomeIcon icon={faInstagram} className='icon' /></li>
                        <li><FontAwesomeIcon icon={faXTwitter} className='icon' /></li>
                        <li><FontAwesomeIcon icon={faWhatsapp} className='icon' /></li>
                    </div>
                    
                </ul>
            </div>
        </section>
    );
};

export default Footer;