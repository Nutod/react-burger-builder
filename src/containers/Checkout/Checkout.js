import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";

export default class extends Component {
	componentDidMount = () => {
		console.log(this.props);
	};

	render() {
		let burger = <p>No ingredients available</p>;

		if (this.props.location.state.ingredients) {
			burger = <Burger ingredients={this.props.location.state.ingredients} />;
		}
		return (
			<Fragment>
				<h3 style={{ textAlign: "center" }}>Here's the Order</h3>
				{burger}
			</Fragment>
		);
	}
}
