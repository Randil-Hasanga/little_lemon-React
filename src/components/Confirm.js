import React from 'react';
import success from '../assets/images/success.json';
import Lottie from 'lottie-react';


const Confirm = () => {
    return (
        <section className='confirm'>
            <h1 className='m-font'>Your reservation has been successfully placed.<br/>Thank you!</h1>
            <Lottie animationData={success} loop={false} className='animation'/>
        </section>
    );
};

export default Confirm;