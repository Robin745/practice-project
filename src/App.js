import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Shop from "./components/Shop/Shop";
import Support from "./components/Support/Support";

function App() {
	return (
		<div className="App">
			<Header> </Header>
			<Routes>
				<Route path="/shop" element={<Shop></Shop>} />
				<Route path="/cart" element={<Cart> </Cart>}></Route>
				<Route path="/services" element={<Services></Services>}></Route>
				<Route path="/support" element={<Support></Support>}></Route>
				<Route path="/about" element={<AboutUs></AboutUs>}></Route>
			</Routes>
		</div>
	);
}

export default App;
