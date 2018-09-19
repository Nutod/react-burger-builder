import React, { Component, Fragment } from "react";
import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuilControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";

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
		totalPrice: 5,
		purchaseable: false,
		purchasing: false
	};

	updatePurchaseState = ingredients => {
		// Pass the ingredient because of the batching by setState
		const sum = Object.keys(ingredients)
			.map(igKey => ingredients[igKey])
			.reduce((acc, value) => acc + value);

		this.setState({ purchaseable: sum > 0 });
	};

	addIngredientHandler = type => {
		const ingredients = { ...this.state.ingredients };
		ingredients[type]++;

		const price = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + price;

		this.setState({ ingredients, totalPrice: newPrice });
		this.updatePurchaseState(ingredients);
	};

	removeIngredientHandler = type => {
		const ingredients = { ...this.state.ingredients };
		// One way to prevent the negative ingredient count
		// if (ingredients[type] <= 0) {
		// 	return;
		// }

		ingredients[type]--;

		const price = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - price;

		this.setState({ ingredients, totalPrice: newPrice });
		this.updatePurchaseState(ingredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: !this.state.purchasing });
	};

	purchaseContinueHandler = () => {
		alert("Continued");
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Fragment>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						continued={this.purchaseContinueHandler}
						cancelled={this.purchaseCancelHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				<p>Burger</p>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchaseable={this.state.purchaseable}
					ordered={this.purchaseHandler}
				/>
			</Fragment>
		);
	}
}
