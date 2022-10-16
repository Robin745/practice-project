import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryItems from '../CatagoryItems/CategoryItems';

const SelectedCategory = () => {
    const { name } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/region/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, []);
    return (
        <div>
            <h2 className='text-xl my-4'> The Category Countries </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-11/12 mx-auto my-8'>
                {
                    country.map(country => <CategoryItems key={country.area} country={country}></CategoryItems>)
                }
            </div>

        </div>
    );
};

export default SelectedCategory;