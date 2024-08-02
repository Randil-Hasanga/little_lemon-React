import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import header_img from '../assets/images/restauranfood.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header' id='header'>
            <div className='header-text'>
                <h1 className='m-font'>Little Lemon</h1>
                <h2 className='m-font'>Sri Lanka</h2>
                <p className='k-font'>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div className='btn k-font'>
                <Link className='header-btn' to="/reservations">Reserve a Table</Link>
                </div>
            </div>
            <img src={header_img} alt="heade_img" className='header-img'/>
        </header>
    );
};

export default Header;