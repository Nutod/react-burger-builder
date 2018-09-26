import React from "react";
import Burger from "../../Burger/Burger";
import {
	ButtonDanger,
	ButtonSuccess
} from "../../Burger/OrderSummary/OrderSummary";

const checkoutSummary = props => {
	return (
		<div>
			<h3>We Hope it tastes nice</h3>
			<div style={{ width: "300px", height: "300px", margin: "auto" }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<ButtonDanger>Cancel</ButtonDanger>
			<ButtonSuccess>Continue</ButtonSuccess>
		</div>
	);
};

export default checkoutSummary;
