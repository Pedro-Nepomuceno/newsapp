import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" />
					<Route path="/products" />
					<Route path="/contact" />
					<Route path="/about" />
				</Routes>
			</Router>
			<Main></Main>
		</div>
	);
}

export default App;
