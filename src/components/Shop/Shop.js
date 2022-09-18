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
        if (cart.includes(product)) {
            alert("Can't select more same Item again");
            return;
        }
        const newCart = [...cart, product];
        if (newCart.length > 4) {
            alert("Can't add more then 4 items");
            return;
        }
        setCart(newCart);
    };

    const chooseOne = (items) => {
        if (items.length > 4) {
            return;
        }
        const x = Math.floor(Math.random() * 4);
        const newCart = [];
        newCart.push(items[x]);
        setCart(newCart);
    };

    const chooseAgain = () => {
        const products = [];
        setCart(products);
    };

    return (
        <div className="main-section">
            <div className="watch-part">
                <h2 className="hidden-item">
                    Cart section is given to the Bottom
                </h2>
                {
                    products.map(product => <Watch
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Watch>)
                }
            </div>
            <div className="cart-part">
                <Cart
                    chooseOne={chooseOne}
                    chooseAgain={chooseAgain}
                    cart={cart}
                > </Cart>
            </div>
        </div>
    );
};

export default Shop;