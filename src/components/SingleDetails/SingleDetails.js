import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextValue } from '../../App';

const SingleDetails = () => {
    const { country } = useParams();
    const [singleCountry, setSingleCountry] = useState([]);
    //importing context api that passed from app.js
    const myName = useContext(ContextValue);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${country}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleCountry(data));
    }, [country]);

    return (
        <div className='flex flex-col items-center my-12'>
            {singleCountry.length < 1 ? <h3 className='text-2xl mt-12'>Loading.... </h3> : ''}
            <h2 className='text-2xl mt-2'>{singleCountry[0]?.name.common}</h2>
            <img className='w-80 my-3' src={singleCountry[0]?.flags.png} alt="" />
            <p>Capital: {singleCountry[0]?.capital}</p>
            <p>Area: {singleCountry[0]?.area}</p>
            <p>{singleCountry[0]?.name.nativeName?.ben?.official}</p>

            {/*This is context api value*/}
            <p>Context value: {myName}</p>
        </div>
    );
};

export default SingleDetails;