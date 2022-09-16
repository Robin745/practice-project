import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Watch from '../Watch/Watch';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="main-section">
            <div className="watch-part">
                {
                    products.map(product => <Watch
                        key={product.id}
                        product={product}
                    ></Watch>)
                }
            </div>
            <div className="cart-part">
                <h4>This is Product Cart</h4>
            </div>
        </div>
    );
};

export default Shop;