import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styled from "styled-components";

const BurgerDiv = styled.div`
	width: 50vh;
	margin: auto;
	height: 250px;
	overflow: hidden;
	text-align: center;
	font-weight: bold;
	font-size: 1.2rem;
`;

const Burger = props => {
	return (
		<BurgerDiv>
			<p>Burger Component</p>
			<BurgerIngredient type="bread-top" />
			<BurgerIngredient type="salad" />
			<BurgerIngredient type="bread-bottom" />
		</BurgerDiv>
	);
};

export default Burger;
