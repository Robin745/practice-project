import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Watch from '../Watch/Watch';
// import { Alert } from 'react-alert';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    const addToCart = selectedItem => {
        const product = products.find(product => product.id === selectedItem);
        const newCart = [...cart, product];
        if (newCart.length > 4) {
            alert("Can't add more then 4 items");
            return;
        }
        setCart(newCart);
    };

    return (
        <div className="main-section">
            <div className="watch-part">
                {
                    products.map(product => <Watch
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Watch>)
                }
            </div>
            <div className="cart-part">
                <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;