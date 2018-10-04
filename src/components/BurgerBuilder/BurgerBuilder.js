import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuilControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import withError from "../../HOCs/withError/withError";
import Spinner from "../UI/Spinner/Spinner";
import { addIngredient, removeIngredient } from "./BurgerActions";

class BurgerBuilder extends Component {
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

	componentDidMount = () => {
		console.log(this.props);
	};

	updatePurchaseState = () => {
		const sum = Object.keys(this.props.ings)
			.map(igKey => this.props.ings[igKey])
			.reduce((acc, value) => acc + value);

		return sum > 0;
	};

	// addIngredientHandler = type => {
	// const ingredients = { ...this.state.ingredients };
	// ingredients[type]++;

	// const price = INGREDIENT_PRICES[type];
	// const oldPrice = this.state.totalPrice;
	// const newPrice = oldPrice + price;

	// this.setState({ ingredients, totalPrice: newPrice });
	// this.updatePurchaseState(ingredients);
	// };

	// removeIngredientHandler = type => {
	// 	const ingredients = { ...this.state.ingredients };
	// 	// One way to prevent the negative ingredient count
	// 	// if (ingredients[type] <= 0) {
	// 	// 	return;
	// 	// }

	// 	ingredients[type]--;

	// 	const price = INGREDIENT_PRICES[type];
	// 	const oldPrice = this.state.totalPrice;
	// 	const newPrice = oldPrice - price;

	// 	this.setState({ ingredients, totalPrice: newPrice });
	// 	this.updatePurchaseState(ingredients);
	// };

	purchaseHandler = () => {
		this.setState({ purchasing: !this.state.purchasing });
	};

	purchaseContinueHandler = () => {
		// let queryParam = [];

		// for (let key in this.props.ings) {
		// 	queryParam.push(
		// 		encodeURIComponent(key) + "=" + encodeURIComponent(this.props.ings[key])
		// 	);
		// }
		// queryParam.push(`price=${this.props.price}`);

		// const queryString = queryParam.join("&");

		// this.props.history.push({
		// 	pathname: "/checkout",
		// 	search: "?" + queryString
		// });

		this.props.history.push("/checkout");
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
							price={this.props.price}
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
	onIngredientAdded: addIngredient(dispatch),
	onIngredientRemoved: removeIngredient(dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withError(BurgerBuilder, axios));
