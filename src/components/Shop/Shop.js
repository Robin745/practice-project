import React from 'react';
import { useProducts } from '../../hooks/hooks';
import ShopItems from '../ShopItems/ShopItems';

const Shop = () => {

    const [products, setProducts] = useProducts();

    return (
        <div className='mt-4'>
            <h1 className='text-4xl'>From, Misrat Mehenaj</h1>
            <h1 className='text-4xl'>Hey, hello</h1>
            <h2 className='text-2xl'>Welcome to shop {products.length}</h2>
            <div className="grid grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-32 xl:grid-cols-4 gap-4  mt-8 md:mx-12">
                {
                    products.map(item => <ShopItems key={item.id} item={item}> </ShopItems>)
                }
            </div>


        </div>

    );
};

export default Shop;
