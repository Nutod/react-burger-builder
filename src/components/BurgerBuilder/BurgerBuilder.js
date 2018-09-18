import React, { Component, Fragment } from "react";
import Burger from "../Burger/Burger";

export default class BurgerBuilder extends Component {
	render() {
		return (
			<Fragment>
				<p>Burger</p>
				<Burger />
				<p>BuildControls</p>
			</Fragment>
		);
	}
}
