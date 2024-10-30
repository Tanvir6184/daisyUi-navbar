import React from 'react';
import Feature from '../Features/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;

    return (
        <div className='bg-pink-300 rounded-lg shadow-2xl p-5'>
            <h2 className='bg-pink-300 rounded-md p-4 text-center'>
                <span className='7xl font-bold'>{price}</span>
                <span className='text-3xl '>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8 font-semibold'>{name}</h4>
            {
                features.map(feature => <Feature feature = {feature}></Feature>)
            }
        </div>
    );
};

export default PriceOption;