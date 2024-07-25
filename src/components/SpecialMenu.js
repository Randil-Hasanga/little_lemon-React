import React from 'react';
import Recipes from '../recipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
const SpecialMenu = () => {
    return (
        <section className='s-menu'>
            <div className='s-menu-title'>
                <h2 className='m-font'>This Week's Specials!</h2>
                <div className='btn k-font'>Online Menu</div>
            </div>
            <div className='cards'>
                {
                    Recipes.map((recipe) => (
                        <div key={recipe.id} className='s-menu-items'>
                            <img src={recipe.image} alt="recipe image" />
                            <div className='s-menu-content'>
                                <div className='s-menu-heading'>
                                    <h2 className='m-font'>{recipe.title}</h2>
                                    <h3 className='m-font'>{`${recipe.price} $`}</h3>
                                </div>
                                <p className='s-menu-desc k-font'>{recipe.description}</p>
                                <div className='s-menu-order'>
                                    <p className='k-font'>Order</p>
                                    <FontAwesomeIcon icon={faTruck} className='truck-icon'/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default SpecialMenu;