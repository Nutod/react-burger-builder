import React from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

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

	@media (max-width: 500px) {
		display: none;
	}
`;

const Menu = styled.div`
	width: 25px;
	height: 5px;
	background-color: #fff;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: -7px;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
	}

	&::after {
		content: "";
		position: absolute;
		top: 7px;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
	}

	@media (min-width: 500px) {
		display: none;
	}
`;

export default ({ openSidebar }) => (
	<Header>
		<Menu onClick={openSidebar} />
		<Logo logoHeight="100%" />
		<NavWrapper>
			<NavigationItems />
		</NavWrapper>
	</Header>
);
