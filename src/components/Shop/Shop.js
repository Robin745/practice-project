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

    //load fake data from public folder.
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // event handler function to set slected items to cart.
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

    // event handler function to generet a random item.
    const chooseOne = (items) => {
        console.log(items.length);
        if (items.length < 4) {
            alert('Choose minimum 4 items');
            return;
        }
        const x = Math.floor(Math.random() * items.length);
        const newCart = [];
        newCart.push(items[x]);
        setCart(newCart);
    };
    // event handler function to reset products array.
    const chooseAgain = () => {
        const products = [];
        setCart(products);
    };

    // event handler function to remove single items
    const removeItem = id => {
        const selectedItem = cart.find(product => product.id === id);
        const newArr = cart.filter(item => item !== selectedItem);
        setCart(newArr);
        console.log(newArr);
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
                    removeItem={removeItem}
                    cart={cart}
                > </Cart>
            </div>
        </div>
    );
};

export default Shop;