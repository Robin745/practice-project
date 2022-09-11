import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { addToShoppingCart, product } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='desc'>
                <h4>{name}</h4>
                <p>Price : ${price}</p>
                <div className='desc-small'>
                    <p><small>Manufacturer : {seller}</small></p>
                    <p><small>Ratings : {ratings} star</small></p>
                </div>
            </div>
            <button onClick={() => addToShoppingCart(product)} className='btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;