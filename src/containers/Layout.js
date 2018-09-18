import React, { Component, Fragment } from "react";
import BurgerBuilder from "../components/BurgerBuilder/BurgerBuilder";
import "./Layout.css";
import styled from "styled-components";
import BurgerIngredient from "../components/Burger/BurgerIngredient/BurgerIngredient";

const MainParagraph = styled.p`
	font-size: 1.2rem;
	background-color: crimson;
`;

// Running yarn eject means you still have to run npm install afterwards as the entire app breaks as of React 16.5

// Main tag added for semantic purposes
export default class Layout extends Component {
	render() {
		return (
			<Fragment>
				<MainParagraph>Header</MainParagraph>
				<main>
					{/* <BurgerBuilder /> */}
					<BurgerIngredient type="salad" />
				</main>
			</Fragment>
		);
	}
}
