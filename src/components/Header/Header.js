import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='block bg-cyan-600 text-lg md:flex justify-between'>
            <div className='flex items-center justify-center hover:bg-cyan-900 p-1 md:p-3'>
                <img className='w-8' src={'navLogo.png'} alt="" />
                <p className='text-black ml-2 hover:text-white'> <Link>Choose by Catagory</Link> </p>
            </div>
            <div className='block md:flex text-black'>
                <p className='text-black p-1 md:p-3 md:ml-2 hover:bg-cyan-900 hover:text-white'>
                    <Link to='/shop' > Shop </Link></p>
                <p className='text-black p-1 md:p-3 md:ml-2 hover:bg-cyan-900 hover:text-white'>
                    <Link to='/cart'> Shopping Cart </Link></p>
                <p className='text-black p-1 md:p-3 md:ml-2 hover:bg-cyan-900 hover:text-white'>
                    <Link to='/services'> Services </Link></p>
                <p className='text-black p-1 md:p-3 md:ml-2 hover:bg-cyan-900 hover:text-white'>
                    <Link to='/support'> Support </Link></p>
                <p className='text-black p-1 md:p-3 md:ml-2 hover:bg-cyan-900 hover:text-white'>
                    <Link to='/about'> About us </Link></p>
            </div>
            <div className='block md:hidden lg:flex'>
                <p className='text-black md:ml-2 p-1 md:p-3 hover:bg-cyan-900 hover:text-white'>
                    <Link><small>+88018135</small> </Link> </p>
                <p className='text-black md:ml-2 p-1 md:p-3 hover:bg-cyan-900 hover:text-white '>
                    <Link> <small>moshiur251@gmail.com</small></Link> </p>
            </div>
        </div>
    );
};

export default Header;