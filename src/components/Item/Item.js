import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Items.css';

const Item = ({ item, removeItem }) => {
    const { name, picture, id } = item;
    return (
        <div>
            <div className="selected-item">
                <img src={picture} alt="" />
                <p>{name}</p>
                <button onClick={() => removeItem(id)} className='remove-item'>
                    <FontAwesomeIcon icon={faTrash}> </FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export default Item;