import React from "react";
const Nav = styled.Navbar`
	background-color: black;
	border-bottom: 3px solid hsla(0, 0%, 77%, 0.1);
	max-height: 80px;
	padding: 19px 104px 10px;
`;
const Navbar = () => (
	<Nav className="navbar">
		<button>News App</button>
		<div>
			<button style={{ marginRight: "15px" }}>Home</button>
			<button>Search</button>
		</div>
	</Nav>
);

export default Navbar;
