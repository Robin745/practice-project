import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col items center mt-12'>
            <h2 className='text-2xl text-red-700'>Error..........</h2>
            <p className='text-xl'> 404 Not Found</p>
            <p>The page you looking for is not available</p>
        </div>
    );
};

export default NotFound;