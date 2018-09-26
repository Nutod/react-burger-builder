import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";

export default class extends Component {
	state = {
		ingredients: null
	};

	componentDidMount = () => {
		this.setState({ ingredients: this.props.location.state.ingredients });
		console.log(this.props.location.state);
	};

	render() {
		let burger = (
			<p style={{ textAlign: "center" }}>No ingredients available</p>
		);

		if (this.state.ingredients) {
			burger = <Burger ingredients={this.state.ingredients} />;
		}

		return (
			<Fragment>
				<h3 style={{ textAlign: "center" }}>Here's the Order</h3>
				{burger}
			</Fragment>
		);
	}
}
