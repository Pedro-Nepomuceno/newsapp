import React, { useState } from "react";
import logo from "../images/cutelogo.png";

import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarExtendedContainer,
	NavbarInnerContainer,
	NavbarLinkContainer,
	NavbarLink,
	Logo,
	OpenLinksButton,
	NavbarLinkExtended,
	SignButton,
} from "./Navbar.style";

function Navbar() {
	const [extendNavbar, setExtendNavbar] = useState(false);

	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<Logo src={logo}></Logo>
				</LeftContainer>
				<RightContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/"> Home</NavbarLink>
						<SignButton>Sign in</SignButton>
						<OpenLinksButton
							onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}>
							{extendNavbar ? <>&#10005;</> : <> &#8801;</>}
						</OpenLinksButton>
					</NavbarLinkContainer>
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
					<NavbarLinkExtended to="/products"> Sign in </NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}

export default Navbar;
