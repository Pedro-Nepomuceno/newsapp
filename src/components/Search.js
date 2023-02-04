import styled from "styled-components";
import React from "react";

const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 80px 0 0;
	width: 608px;
	@media (max-width: 700px) {
		padding: 38px 0 0;
		width: 452px;
	}
`;
const Text = styled.h1`
	color: #fff;
	font-family: Roboto Slab, serif;
	font-size: 60px;
	font-weight: 400;
	line-height: 64px;
	margin: 0 0 32px;
	padding: 0;
	@media (max-width: 700px) {
		font-size: 36px;
		line-height: 40px;
		margin: 0 0 16px;
		padding: 0;
	}
`;

const SubText = styled.p`
	color: #fff;
	font-family: Roboto, sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	margin: 0 0 88px;
	padding: 0;
	@media (max-width: 700px) {
		margin: 0 0 48px;
	}
`;
const FormContainer = styled.div`
	display: flex;
	height: 64px;
	max-width: 608px;
	position: relative;
	@media (max-width: 700px) {
		height: 56px;
		max-width: 425px;
	}
`;
const FormInput = styled.input`
	border: none;
	border-radius: 100px;
	color: #1a1b22;
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: 400;
	height: 100%;
	line-height: 22px;
	padding: 0 0 0 24px;
	width: 608px;
	@media (max-width: 700px) {
		width: 440px;
	}
`;
const ButtonSubmit = styled.button`
	background-color: #2f71e5;
	border: none;
	border-radius: 100px;
	color: #fff;
	font-family: Roboto, sans-serif;
	font-size: 18px;
	font-weight: 500;
	height: 64px;
	line-height: 24px;
	padding: 18px 56px 22px;
	position: absolute;
	right: 0;
	width: 168px;
	@media (max-width: 700px) {
		height: 56px;
		padding: 16px 52px;
		right: -25px;
		width: 160px;
	}
	&:hover {
		cursor: pointer;
	}
`;

function Search() {
	return (
		<>
			<SearchContainer>
				<Text>What is going on in the world ?</Text>
				<SubText>Information on the tip of your fingers.</SubText>

				<FormContainer>
					<FormInput></FormInput>
					<ButtonSubmit>Search</ButtonSubmit>
				</FormContainer>
			</SearchContainer>
		</>
	);
}

export default Search;
