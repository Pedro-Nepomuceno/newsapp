import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" />
				<Route path="/products" />
				<Route path="/contact" />
				<Route path="/about" />
			</Routes>
			<Main />
		</div>
	);
}

export default App;
