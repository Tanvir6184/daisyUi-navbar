import React from 'react';
import Feature from '../Features/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;

    return (
        <div className='bg-pink-300 rounded-lg shadow-2xl p-5 flex flex-col '>
            <h2 className='bg-pink-300 rounded-md p-4 text-center'>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-xl '>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8 font-semibold'>{name}</h4>
            <div className='flex-grow'>
                
            {
                features.map(feature => <Feature feature = {feature}></Feature>)
            }
            </div>
            <div className=''>
                <button className='  bg-green-500 rounded-lg w-full font-bold hover:bg-blue-600'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;