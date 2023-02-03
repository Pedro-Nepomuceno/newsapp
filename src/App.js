import "./App.css";
import React from "react";
import photo from "../src/images/newsPhoto.png";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={photo} />
			</header>
		</div>
	);
}

export default App;
