import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
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
		let summary = <Redirect to="/" />;

		if (this.props.ingredients) {
			summary = (
				<Fragment>
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
				</Fragment>
			);
		}
		return <div>{summary}</div>;
	}
}

const mapStateToProps = state => ({
	ingredients: state.burger.ingredients,
	price: state.burger.price
});

export default connect(mapStateToProps)(Checkout);
