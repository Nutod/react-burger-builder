import React from "react";
import Burger from "../../Burger/Burger";

const checkoutSummary = props => {
	return (
		<div>
			<h3>We Hope it tastes nice</h3>
			<div style={{ width: "300px", height: "300px", margin: "auto" }}>
				<Burger ingredients={props.ingredients} />
			</div>
		</div>
	);
};

export default checkoutSummary;
