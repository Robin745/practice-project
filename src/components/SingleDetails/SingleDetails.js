import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { json, useParams } from 'react-router-dom';

const SingleDetails = () => {
    const { country } = useParams();
    const [singleCountry, setSingleCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${country}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleCountry(data));
    }, []);

    console.log(singleCountry);
    return (
        <div className='flex flex-col items-center mt-12'>
            <h2 className='text-2xl mt-2'>{singleCountry[0]?.name.common}</h2>
            <img className='w-80 my-3' src={singleCountry[0]?.flags.png} alt="" />
            <p>Capital: {singleCountry[0]?.capital}</p>
            <p>Area: {singleCountry[0]?.area}</p>
            <p>{singleCountry[0]?.name.nativeName?.ben?.official}</p>
        </div>
    );
};

export default SingleDetails;