import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let quantity = 0;
    let total = 0;
    let tax = 0;
    let shipping = 0;
    let grandTotal = 0;
    for (let item of cart) {
        // console.log(item);
        quantity = quantity + item.quantity;
        total = total + item.price * item.quantity;
        shipping = shipping + item.shipping;
        tax = total * 10 / 100;
        grandTotal = total + tax + shipping;
    }
    return (
        <div className='cart'>
            <h3>Product Summary and History</h3>
            <p>Number of Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Cost : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h4>Grand Total : ${grandTotal}</h4>
        </div>
    );
};

export default Cart;