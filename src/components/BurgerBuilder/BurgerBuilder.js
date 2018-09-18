import React, { Component, Fragment } from "react";
import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuilControls/BuildControls";

export default class BurgerBuilder extends Component {
	state = {
		ingredients: {
			bacon: 1,
			cheese: 2,
			meat: 1,
			salad: 1
		},
		totalPrice: 5
	};

	render() {
		return (
			<Fragment>
				<p>Burger</p>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls />
			</Fragment>
		);
	}
}
