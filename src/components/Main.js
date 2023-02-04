import photo from "../images/worldwebsite.png";
import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
	background-color: black;
	display: flex;
	align-items: center;
	background-image: url(${photo});
	background-position: left center;
	position: relative;
	background-repeat: no-repeat;
	padding-left: 500px;
	height: 800px;
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
