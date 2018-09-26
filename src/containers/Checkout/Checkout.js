import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
	state = {
		ingredients: {
			bacon: 1,
			cheese: 1
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
				<CheckoutSummary ingredients={this.state.ingredients} />
			</div>
		);
	}
}

export default Checkout;
