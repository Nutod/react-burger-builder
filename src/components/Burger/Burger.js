import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styled from "styled-components";

const BurgerDiv = styled.div`
	width: 50vh;
	margin: auto;
	height: 300px;
	overflow: scroll;
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

const Burger = ({ ingredients }) => {
	// Logic for transforming the Object Ingredients into array that corresponds with the Ingredient type
	let transformedIngredients = Object.keys(ingredients)
		.map(igKey => {
			return [...Array(ingredients[igKey])].map((_, i) => (
				<BurgerIngredient key={igKey + i} type={igKey} />
			));
		})
		.reduce((arr, el) => [...arr, el], []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please add Ingredients</p>;
	}

	return (
		<BurgerDiv>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</BurgerDiv>
	);
};

export default Burger;
