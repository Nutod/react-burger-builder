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
		color: #444;
	}
`;

export default ({ isAuth }) => (
	<NavigationList>
		<NavigationItem link="/" exact displayText="Burger Builder" />
		{isAuth ? <NavigationItem link="/orders" displayText="Orders" /> : null}
		{!isAuth ? (
			<NavigationItem link="/auth" displayText="Authenticate" />
		) : (
			<NavigationItem link="/logout" displayText="Logout" />
		)}
	</NavigationList>
);
