import React, { useEffect, useRef } from 'react';
import About from './About';
import Header from './Header';
import logo from '../assets/images/Logo .svg'
import { Routes, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { easeInOut, transform } from 'framer-motion';

const Nav = () => {
    const navRef = useRef(null);
    const prevScrollY = useRef(0);

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
        e.preventDefault();
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
    return (
        <Box
            ref={navRef}
            position="fixed"
            top={0}
            left={0}
            bottom={0}
            right={0}
            transition="transform 0.3s ease-in-out"
        >
            <nav className='navbar'>
                <div className='nav-items'>
                    <img src={logo} alt="logo" className='logo' />
                    <div className='nav-list'>
                        <ul className='nav-ul'>
                            {/* <Link to={'/'} className='nav-link'>Header</Link>
                            <Link to={'/about'} className='nav-link'>About</Link>
                            <Link to={'/'} className='nav-link'>Header</Link>
                            <Link to={'/about'} className='nav-link'>About</Link>
                            <Link to={'/'} className='nav-link'>Header</Link> */}

                            <li><a href="/about" onClick={handleClick("about")}>About</a></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                </div>

            </nav>
            {/* <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/about' element={<About/>} />
            </Routes> */}
        </Box>  
    );
};

export default Nav;