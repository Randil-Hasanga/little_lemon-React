import React from 'react';
import image from '../assets/images/restaurant.324d0f99bdf19400a0f7.jpg'

const Reservations = () => {
    return (
        <section className='reservations'>
            <div className='form'>
                <form action="/confirm">
                    <h1 className='m-font'>Reservations</h1>
                    <section>
                        <h2 className='m-font'>Personal Details</h2>
                        <div className='personal-details'>
                            <input type="text" placeholder='Occasion' className='' name='occasion' maxLength="50" required/>
                            <input type="date" name="date" id="date" className=''  required />
                            <input type="number" name="guests" id="guests" className='' placeholder='No of Gusests' min="2" max="8" required/>
                            <input type="time" name="time" id="time" required/>
                        </div>
                    </section>
                    <section>
                        <h2 className='m-font'>Booking Details</h2>
                        <div className='booking-details'>
                            <input type="text" placeholder='Full Name' maxLength="100" required/>
                            <input type="email" placeholder='Email' maxLength="100" required/>
                            <input type="tel" placeholder='Mobile' minLength="10" required/>
                            <input type="text" placeholder='Special Request ?' maxLength="100"/>
                        </div>
                    </section>
                    <button type="submit" className='btn res-btn'>Confirm Reservation</button>
                </form>
                <div className='reservation-img'>
                    <img src={image} alt="image" className='res-img'/>
                </div>
            </div>
        </section>
    );
};

export default Reservations;