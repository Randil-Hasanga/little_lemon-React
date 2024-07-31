import React from 'react';
import Header from './Header';
import SpecialMenu from './SpecialMenu';
import Reviews from './Reviews';
import About from './About';

const Main = () => {
    return (
        <main>
            <Header/>
            <SpecialMenu/>
            <Reviews/>
            <About/>
        </main>
    );
};

export default Main;