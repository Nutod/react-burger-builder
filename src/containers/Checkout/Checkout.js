import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
	state = {
		ingredients: {
			bacon: 1,
			cheese: 1
		}
	};

	componentDidMount = () => {
		const query = new URLSearchParams(this.props.location.search);
		let ingredients = {};

		for (let param of query.entries()) {
			ingredients[param[0]] = +param[1];
			this.setState({ ingredients });
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
			</div>
		);
	}
}

export default Checkout;
