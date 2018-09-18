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
	@media (min-width: 500px) and (min-height: 400px) {
		.Burger {
			width: 350px;
			height: 400px;
		}
	}

	@media (min-width: 1000px) and (min-height: 700px) {
		.Burger {
			width: 700px;
			height: 600px;
		}
	}

	@media (min-width: 700px) and (min-height: 401px) {
		.Burger {
			width: 450px;
			height: 400px;
		}
	}
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
