import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
	state = {};

	// componentDidMount = () => {
	// 	const query = new URLSearchParams(this.props.location.search);
	// 	let ingredients = {};
	// 	let price = 0;

	// 	for (let param of query.entries()) {
	// 		param[0] === "price"
	// 			? (price = param[1])
	// 			: (ingredients[param[0]] = +param[1]);
	// 		this.setState({ ingredients, totalPrice: price });
	// 	}
	// };

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
					ingredients={this.props.ingredients}
					cancelled={this.cancelHandler}
					continued={this.continueHandler}
				/>
				<Route
					path={`${this.props.match.path}/contact-data`}
					render={() => (
						<ContactData
							ingredients={this.props.ingredients}
							price={+this.props.price}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	ingredients: state.ingredients,
	price: state.price
});

export default connect(mapStateToProps)(Checkout);
