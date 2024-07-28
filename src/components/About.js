import React from 'react';
import image1 from '../assets/images/chef.4b4c2d26b514db32e8fc.jpg'
import image2 from '../assets/images/chefs.6ba0e06bfa9c1ea75109.jpg'

const About = () => {
    return (
        <section className='about'>
            <div className='about-text'>
                <h1 className='m-font'>About Us</h1>
                <p>Welcome to <strong>Little Lemon</strong>, Sri Lanka's premier family-owned Mediterranean restaurant. We blend traditional recipes with a modern twist, using the freshest local ingredients and time-honored cooking techniques. Our menu celebrates the rich flavors of the Mediterranean, offering a delightful culinary experience in a warm and welcoming atmosphere. Join us for a meal and experience the perfect harmony of tradition and innovation.</p>
            </div>
            <img src={image2} alt="image 1" className='image image1'/>
            <img src={image1} alt="image 1" className='image image2'/>
        </section>
    );
};

export default About;