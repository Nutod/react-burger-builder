import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuilControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import withError from "../../HOCs/withError/withError";
import Spinner from "../UI/Spinner/Spinner";
import * as actionTypes from "../../store/actions/actions";

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

	updatePurchaseState = () => {
		const sum = Object.keys(this.props.ings)
			.map(igKey => this.props.ings[igKey])
			.reduce((acc, value) => acc + value);

		return sum > 0;
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
		const disabledInfo = { ...this.props.ings };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let burger = <Spinner />;

		if (this.props.ings) {
			burger = (
				<Fragment>
					<Burger ingredients={this.props.ings} />
					<BuildControls
						addIngredient={this.props.onIngredientAdded}
						removeIngredient={this.props.onIngredientRemoved}
						disabled={disabledInfo}
						price={this.props.price}
						purchaseable={this.updatePurchaseState()}
						ordered={this.purchaseHandler}
					/>
				</Fragment>
			);
		}
		return (
			<Fragment>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
					{this.props.ings ? (
						<OrderSummary
							ingredients={this.props.ings}
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
	ings: state.ingredients,
	price: state.price
});

const mapDispatchToProps = dispatch => ({
	onIngredientAdded: ingredientName =>
		dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName }),
	onIngredientRemoved: ingredientName =>
		dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withError(BurgerBuilder, axios));
