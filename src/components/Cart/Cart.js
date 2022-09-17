import React from 'react';
import './Cart.css';
import Item from './Item/Item';

const Cart = ({ cart }) => {

    return (
        <div>
            <h3>Selected Products</h3>
            {
                cart.map(item => <Item item={item}> </Item>)
            }
            <div className="buttons">
                <button className='btn-choose-1'>
                    CHOOSE 1 FOR ME
                </button>
                <button className='btn-choose-again'>
                    CHOOSE AGAIN
                </button>
            </div>

        </div>
    );
};

export default Cart;