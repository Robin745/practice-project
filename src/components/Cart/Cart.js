import React from 'react';
import './Cart.css';
import Item from '../Item/Item';

const Cart = ({ cart, chooseAgain, chooseOne, removeItem }) => {
    // console.log(cart);
    let products = [...cart];

    // console.log(products);

    return (
        <div className='cart-section'>
            <h3>Selected Products</h3>
            {
                products.map(item => <Item key={item.id} removeItem={removeItem} item={item}> </Item>)
            }
            <div className="buttons">
                <button onClick={() => chooseOne(products)} className='btn-choose-1'>
                    CHOOSE 1 FOR ME
                </button>

                <button onClick={() => chooseAgain()} className='btn-choose-again'>
                    CHOOSE AGAIN
                </button>
            </div>

        </div>
    );
};

export default Cart;