import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
	return (
		<div className="Burger">
			<p>Burger Component</p>
			<BurgerIngredient type="salad" />
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
