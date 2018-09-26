import React, { Component, Fragment } from "react";
import axios from "axios";

import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuilControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import withError from "../../HOCs/withError/withError";
import Spinner from "../UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
	salad: 1,
	bacon: 1.5,
	meat: 1.3,
	cheese: 1.1
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 5,
		purchaseable: false,
		purchasing: false,
		loading: false
	};

	componentDidMount = () => {
		axios
			.get("https://burger-react-d3b90.firebaseio.com/ingredients.json")
			.then(response => this.setState({ ingredients: response.data }))
			.catch(error => console.log(error));
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
		this.setState({ loading: true });
		axios
			.post("https://burger-react-d3b90.firebaseio.com/orders.json", {
				ingredients: this.state.ingredients,
				price: this.state.totalPrice
			})
			.then(response => {
				console.log(response);
				this.props.history.push("/checkout", {
					ingredients: { ...this.state.ingredients },
					price: this.state.totalPrice
				});
			})
			.catch(error => console.log(error));
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let burger = <Spinner />;

		if (this.state.ingredients) {
			burger = (
				<Fragment>
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
		return (
			<Fragment>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
					{this.state.ingredients && !this.state.loading ? (
						<OrderSummary
							ingredients={this.state.ingredients}
							continued={this.purchaseContinueHandler}
							cancelled={this.purchaseCancelHandler}
							price={this.state.totalPrice}
						/>
					) : (
						<Spinner />
					)}
				</Modal>
				{burger}
			</Fragment>
		);
	}
}

export default withError(BurgerBuilder, axios);
