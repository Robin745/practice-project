import React from 'react';

const ShopItems = ({ item }) => {
    const { name, picture, price } = item;
    return (
        <div className='relative'>
            <img className='w-80 h-4/5 rounded' src={picture} alt="" />
            <button className='text-2xl absolute inset-0'> {name}</button>

        </div>
    );
};

export default ShopItems;