import React from "react";
import styled from "styled-components";
import logo from "../images/cutelogo.png";

const HomeButton = styled.button`
	border-bottom: 3px solid #fff;
	background-color: initial;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	line-height: 24px;
	margin-top: 45px;
	padding: 0 20px 23px;
	margin-right: 50px;

	text-decoration: none;
	&:hover {
		cursor: pointer;
	}
`;

const Logo = styled.img`
	width: 250px;
	height: 200px;
	margin-left: 200px;
	@media (max-width: 768px) {
		width: 150px;
		height: 100px;
		margin-left: 30px;
	}
`;
const Nav = styled.div`
	background-color: black;
	border-bottom: 3px solid hsla(10, 0%, 90%, 0.3);
	max-height: 200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const NavbarLeft = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 768px) {
		margin-bottom: 10px;
	}
`;
const SignButton = styled.button`
	background-color: initial;
	border: 1px solid #fff;
	border-radius: 100px;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	height: 48px;
	line-height: 24px;
	margin-top: 45px;
	margin-left: 50px;
	padding: 12px;
	width: 176px;
	&:hover {
		cursor: pointer;
	}
`;
function NavBar() {
	return (
		<>
			<Nav>
				<Logo src={logo} />
				<NavbarLeft>
					<HomeButton>Home</HomeButton>
					<SignButton>Sign in </SignButton>
				</NavbarLeft>
			</Nav>
		</>
	);
}
export default NavBar;
