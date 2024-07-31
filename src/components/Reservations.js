import React from 'react';

const Reservations = () => {
    return (
        <section className='reservations'>
            <h1>Reservations</h1>
            <div className='form'>
                <form action="">
                    <section>
                        <h2>Personal Details</h2>
                        <div className='personal-details'>
                            <input type="text" placeholder='Occasion' className='' name='occasion' maxLength="50" required/>
                            <input type="date" name="date" id="date" className=''  required />
                            <input type="number" name="guests" id="guests" className='' placeholder='No of Gusests' min="2" max="8" required/>
                            <input type="time" name="time" id="time" />
                        </div>
                    </section>
                    <section>

                    </section>
                </form>
            </div>
        </section>
    );
};

export default Reservations;