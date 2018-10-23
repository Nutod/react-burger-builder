import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";

import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuilControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import withError from "../../HOCs/withError/withError";
import Spinner from "../UI/Spinner/Spinner";
import {
	addIngredient,
	removeIngredient,
	fetchIngredientsSuccess,
	fetchIngredientsFailed
} from "./BurgerActions";

class BurgerBuilder extends Component {
	state = {
		purchaseable: false,
		purchasing: false
	};

	componentDidMount = () => {
		// Fetching the Ingredients whenever the component mounts
		axios
			.get("https://burger-react-d3b90.firebaseio.com/ingredients.json")
			.then(response => {
				// Dispatching a Success Action when response is gotten
				this.props.onFetchIngredientsSuccess(response.data);
			})
			.catch(error => {
				// Dispatching a Failure Action
				this.props.onFetchIngredientsFailed();
			});
	};

	// Function for updating purchase state to enable and disable the order button
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
		if (this.props.isAuthenticated) {
			this.setState({ purchasing: !this.state.purchasing });
		} else {
			this.props.history.push("/auth");
		}
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
		// Logic to convert the Ingredient Object value into Boolean for disabling the 'less' button
		const disabledInfo = { ...this.props.ings };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		// Default Element for the Burger Component
		let burger = <Spinner />;

		// Error state element for the Burger Component when something goes wrong
		if (this.props.error) {
			burger = (
				<p style={{ textAlign: "center" }}>Ingredients cannot be loaded!</p>
			);
		}

		// Burger Component populated with Ingredients from the Store
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
						isAuth={this.props.isAuthenticated}
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
				<div style={{ paddingTop: "8rem" }}>{burger}</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	ings: state.burger.ingredients,
	price: state.burger.price,
	error: state.burger.error,
	isAuthenticated: state.auth.token !== null
});

// mapDispatchToProps used with Dependecy Injection. It can be adjusted to use Objects
const mapDispatchToProps = dispatch => ({
	onIngredientAdded: addIngredient(dispatch),
	onIngredientRemoved: removeIngredient(dispatch),
	onFetchIngredientsSuccess: fetchIngredientsSuccess(dispatch),
	onFetchIngredientsFailed: fetchIngredientsFailed(dispatch)
});

// BurgerBuilder Component wrapper with a HOC to catch request and response errors with API requests
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withError(BurgerBuilder, axios));
