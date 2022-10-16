import React from "react";

const ShopItems = ({ item }) => {
	const { name, picture, price } = item;
	const categoryItems = () => {

	};
	return (
		<div className="group bg-white w-11/12 rounded-md relative overflow-hidden">
			<img
				className="w-full h-full group-hover:scale-125 duration-700 ease-in-out"
				src={picture}
				alt=""
			/>
			<p className="text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<button className="bg-lime-700/50 px-4 py-1 rounded">{name}</button>
			</p>
		</div>
	);
};

export default ShopItems;
