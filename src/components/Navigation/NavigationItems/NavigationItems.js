import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-flow: column;
	align-items: center;
	height: 100%;

	@media (min-width: 500px) {
		flex-flow: row;
	}
`;

export default () => (
	<NavigationList>
		<NavigationItem link="/" exact displayText="Burger Builder" />
		<NavigationItem link="/orders" displayText="Orders" />
	</NavigationList>
);
