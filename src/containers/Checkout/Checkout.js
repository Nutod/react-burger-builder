import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
	state = {
		ingredients: {
			bacon: 1,
			cheese: 1
		},
		totalPrice: 0
	};

	componentDidMount = () => {
		const query = new URLSearchParams(this.props.location.search);
		let ingredients = {};
		let price = 0;

		for (let param of query.entries()) {
			param[0] === "price"
				? (price = param[1])
				: (ingredients[param[0]] = +param[1]);
			this.setState({ ingredients, totalPrice: price });
		}
	};

	cancelHandler = () => {
		this.props.history.goBack();
	};

	continueHandler = () => {
		this.props.history.replace("/checkout/contact-data");
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					cancelled={this.cancelHandler}
					continued={this.continueHandler}
				/>
				<Route
					path={`${this.props.match.path}/contact-data`}
					render={() => (
						<ContactData
							ingredients={this.state.ingredients}
							price={+this.state.totalPrice}
						/>
					)}
				/>
			</div>
		);
	}
}

export default Checkout;
