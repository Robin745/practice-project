import React from "react";

const ShopItems = ({ item }) => {
	const { name, picture, price } = item;
	return (
		<div className="relative">
			<img
				className="w-11/12 h-full rounded hover:scale-x-125 duration-700 ease-in-out"
				src={picture}
				alt=""
			/>
			<p className="text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<button className="bg-lime-700 px-8 py-2 rounded">{name}</button>
			</p>
		</div>
	);
};

export default ShopItems;
