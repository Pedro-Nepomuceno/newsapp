import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignButton = styled.button`
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
	@media (max-width: 700px) {
		display: none;
	}
`;

export const NavbarContainer = styled.nav`
	width: 100%;
	height: ${(props) => (props.extendNavbar ? "100vh" : "350px")};
	background-color: black;
	display: flex;
	padding-bottom: 100px;
	flex-direction: column;
	@media (min-width: 700px) {
		height: 80px;
	}
`;

export const LeftContainer = styled.div`
	flex: 30%;
	display: flex;
	align-items: center;
	padding-left: 5%;
`;

export const RightContainer = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 80px;
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 350px;
	display: flex;
	background-color: black;
`;

export const NavbarLinkContainer = styled.div`
	display: flex;
`;

export const NavbarLink = styled(Link)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin-top: 50px;
	@media (max-width: 700px) {
		display: none;
	}
`;

export const NavbarLinkExtended = styled(Link)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;
`;

export const Logo = styled.img`
	margin: 10px;
	max-width: 200px;
	height: auto;
`;

export const OpenLinksButton = styled.button`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	color: white;
	font-size: 45px;
	cursor: pointer;
	@media (min-width: 700px) {
		display: none;
	}
`;

export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 700px) {
		display: none;
	}
`;
