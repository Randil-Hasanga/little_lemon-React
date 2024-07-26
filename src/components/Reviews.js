import React from 'react';
import reviews from '../reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
    const stars = Array(5).fill(0);
    return (
        <section className='reviews'>
            <h1 className='review-title m-font reviews-section'>What People Say About Us!</h1>
            <div className='review-cards'>
                {reviews.map((review) => (
                    <div key={review.id} className='review-card'>
                        <img src={review.image} alt="review-image" className='review-image'/>
                        <div className='text-container'>
                                <h3 className='review-name k-font'>{review.name}</h3>
                                <div className='stars'>{stars.map((_,index)=>(
                                    <FontAwesomeIcon icon={faStar} key={index} className='star'/>
                                ))}
                                </div>
                            <h3 className='review-desc k-font'>{review.review}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;