import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { BurgerWrapper } from "../Elements/Wrappers";

const Burger = ({ ingredients }) => {
	// We receive ingredient object as prop

	// Logic for transforming the Object Ingredients into array that corresponds with the Ingredient type
	let transformedIngredients = Object.keys(ingredients)
		.map(igKey => {
			return [...Array(ingredients[igKey])].map((_, i) => (
				<BurgerIngredient key={igKey + i} type={igKey} />
			));
		})
		.reduce((arr, el) => arr.concat(el), []);

	// If the length of the transformed ingredients is 0, then no ingredient has been added
	// In which case, we use a placeholder paragrapht text
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please add Ingredients</p>;
	}

	return (
		<BurgerWrapper>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</BurgerWrapper>
	);
};

export default Burger;
