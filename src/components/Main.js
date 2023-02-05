import photo from "../images/worldwebsite.png";
import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
	background-color: black;
	display: flex;
	align-items: center;
	height: 100vh;
`;

function Main() {
	return (
		<>
			<Container>
				<Search></Search>
			</Container>
		</>
	);
}

export default Main;
