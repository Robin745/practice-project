import React from "react";
import { useProducts } from "../../hooks/hooks";
import ShopItems from "../ShopItems/ShopItems";

const Shop = () => {
	const [products, setProducts] = useProducts();

	return (
		<div className="mt-4">
<<<<<<< HEAD
			<h1 className="text-4xl">Hey, hello welcome to new pull request</h1>
			<h3>This the latest commit we made</h3>
=======
			<h1 className="text-4xl">Hey, hello</h1>
			<h2>baal hoy na ken</h2>
			<h2>FUck you bitch</h2>
			<h3>Baal falaite ashci</h3>
>>>>>>> 6de4305f8647f99b2a6499fd64117d2ba134b5a3
			<h2 className="text-2xl">Welcome to shop {products.length}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-8 md:mx-12">
				{products.map((item) => (
					<ShopItems key={item.id} item={item}>
						{" "}
					</ShopItems>
				))}
			</div>
		</div>
	);
};

export default Shop;
