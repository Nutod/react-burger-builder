import React, { Component, Fragment } from "react";
import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuilControls/BuildControls";

const INGREDIENT_PRICES = {
	salad: 1,
	bacon: 1.5,
	meat: 1.3,
	cheese: 1.1
};

export default class BurgerBuilder extends Component {
	state = {
		ingredients: {
			bacon: 0,
			cheese: 0,
			meat: 0,
			salad: 0
		},
		totalPrice: 5
	};

	addIngredientHandler = type => {
		const ingredients = { ...this.state.ingredients };
		ingredients[type]++;

		const price = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + price;

		this.setState({ ingredients, totalPrice: newPrice });
	};

	removeIngredientHandler = type => {
		const ingredients = { ...this.state.ingredients };
		ingredients[type]--;

		const price = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - price;

		this.setState({ ingredients, totalPrice: newPrice });
	};

	render() {
		return (
			<Fragment>
				<p>Burger</p>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
				/>
			</Fragment>
		);
	}
}
