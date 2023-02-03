import photo from "../images/worldwebsite.png";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	background-color: black;
	background-image: url(${photo});
	background-repeat: no-repeat;
	width: 2000px;
	height: 2000px;
`;

function Main() {
	return <Container></Container>;
}

export default Main;
