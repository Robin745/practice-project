import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToLocal, getCart } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const localData = getCart();
        const arr = [];
        for (const id in localData) {
            const addedCart = products.find(product => product.id === id);
            if (addedCart) {
                const quantity = localData[id];
                addedCart.quantity = quantity;
                arr.push(addedCart);
            }
        }
        setCart(arr);
    }, [products]);


    const addToShoppingCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToLocal(selectedProduct.id);
    };

    return (
        <div>
            <div className='main-section'>
                <div className='shopping-part'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addToShoppingCart={addToShoppingCart}
                        > </Product>)
                    }
                </div>

                <div className='calculation-part'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;;