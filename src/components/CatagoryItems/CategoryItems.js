import React from 'react';
import { useNavigate } from 'react-router-dom';


const CategoryItems = ({ country }) => {
    const { common } = country.name;
    const { png } = country.flags;
    const navigate = useNavigate();

    const seeFullDetails = () => {
        navigate(`/details/${common}`);
    };
    return (
        <div className='group bg-white w-11/12 relative overflow-hidden'>
            <img
                className="w-full h-full group-hover:scale-125 duration-700 ease-in-out"
                src={png}
                alt=""
            />

            <p className="text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                    onClick={seeFullDetails}
                    className="bg-white/50 px-4 py-1 rounded">{common.slice(0, 10)}
                </button>
            </p>
        </div>
    );
};

export default CategoryItems;