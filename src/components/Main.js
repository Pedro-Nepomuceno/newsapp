import photo from "../images/websitephoto.png";
import React from "react";

function Main() {
	return (
		<div className="Main">
			<header className="main__header">
				<img className="main__photo" src={photo} />
			</header>
		</div>
	);
}

export default Main;
