import React from "react";
import styled from "styled-components";

const Header = styled.header`
	height: 56px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	align-items: center;
	padding: 0 20px;
	z-index: 90;
	box-sizing: border-box;
	background-color: #703b09;
	color: #fff;
`;

const NavWrapper = styled.nav`
	height: 100%;
`;

export default () => (
	<Header>
		<div>MENU</div>
		<div>LOGO</div>
		<NavWrapper>...</NavWrapper>
	</Header>
);
