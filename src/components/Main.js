import photo from "../images/worldwebsite.png";
import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
	background-color: black;
	background-image: url(${photo});
	background-repeat: no-repeat;
	padding-left: 300px;
	width: 2000px;
	height: 2000px;
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
