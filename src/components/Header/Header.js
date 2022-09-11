import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <img src={logo} alt="logo" />
                <div>
                    <a href="/order">Order</a>
                    <a href="/Order">Order Review</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;