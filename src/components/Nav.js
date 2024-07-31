import React, { useEffect, useRef, useState } from 'react';
import About from './About';
import Header from './Header';
import logo from '../assets/images/Logo .svg'
import { Routes, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { easeInOut, transform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const navRef = useRef(null);
    const prevScrollY = useRef(0);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const nav = navRef.current;

        if (currentScrollY > prevScrollY.current) {
            if (nav) {
                nav.style.transform = "translateY(-100%)";
            }
        } else {
            if (nav) {
                nav.style.transform = "translateY(0%)";
            }
        }
        prevScrollY.current = currentScrollY;
    };

    const handleClick = (anchor) => (e) =>{
        const element = document.getElementById(anchor);
        if(element){
            element.scrollIntoView({
                behavior:'smooth',
                block: 'start'
            });
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[]);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }
    return (
            <nav className='navbar' ref={navRef}>
                <img src={logo} alt="logo" className='logo' />
                <div>
                    <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={toggleMenu} />
                </div>
                <ul className= {`nav-links ${menuVisible ? 'visible' : ''}`}>
                    <li className='nav-link list'><Link to="/">Home</Link></li>
                    <li className='nav-link list'><Link to="/" onClick={handleClick('about')}>About</Link></li>
                    <li className='nav-link list'>menu</li>
                    <li className='nav-link list'><Link to="/reservations">Reservations</Link></li>
                    <li className='nav-link list'>Login</li>
                    <li className='nav-btn list'>
                        <div className={`btn ${menuVisible ? 'visible' : ''}`}>
                            Order Online
                        </div>
                    </li>
                </ul>
            </nav>
    );
};

export default Nav;