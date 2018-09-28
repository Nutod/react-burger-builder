import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";

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
		purchasing: false
	};

	componentDidMount = () => {
		// axios
		// 	.get("https://burger-react-d3b90.firebaseio.com/ingredients.json")
		// 	.then(response => {
		// 		this.setState({ ingredients: response.data });
		// 		console.log(response.data);
		// 	})
		// 	.catch(error => console.log(error));

		console.log(this.props);
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
		let queryParam = [];

		for (let key in this.state.ingredients) {
			queryParam.push(
				encodeURIComponent(key) +
					"=" +
					encodeURIComponent(this.state.ingredients[key])
			);
		}
		queryParam.push(`price=${this.state.totalPrice}`);

		const queryString = queryParam.join("&");

		this.props.history.push({
			pathname: "/checkout",
			search: "?" + queryString
		});
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
					{this.state.ingredients ? (
						<OrderSummary
							ingredients={this.state.ingredients}
							continued={this.purchaseContinueHandler}
							cancelled={this.purchaseCancelHandler}
							price={this.state.totalPrice}
						/>
					) : null}
				</Modal>
				{burger}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	ings: state.ingredients
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withError(BurgerBuilder, axios));
