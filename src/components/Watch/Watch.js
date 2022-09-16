import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Watch.css';

const Watch = (props) => {
    console.log(props.product);
    const { name, price, picture } = props.product;

    return (
        <div className='single-watch'>
            <img src={picture} alt="" />

            <div className="desc">
                <h4>{name}</h4>
                <p>Price : ${price}</p>
            </div>

            <button className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Watch;