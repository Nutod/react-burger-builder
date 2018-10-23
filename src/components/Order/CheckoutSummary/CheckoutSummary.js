import React from "react";
import Burger from "../../Burger/Burger";
import { ButtonDanger, ButtonSuccess } from "../../Elements/Button";
import { CheckoutSummaryWrapper } from "../../Elements/Wrappers";


const checkoutSummary = props => {
	return (
		<CheckoutSummaryWrapper>
			<h3>We Hope it tastes nice</h3>
			<div
				style={{
					width: "300px",
					height: "300px",
					overflow: "scroll",
					margin: "auto"
				}}
			>
				<Burger ingredients={props.ingredients} />
			</div>
			<ButtonDanger onClick={props.cancelled}>Cancel</ButtonDanger>
			<ButtonSuccess onClick={props.continued}>Continue</ButtonSuccess>
		</CheckoutSummaryWrapper>
	);
};

export default checkoutSummary;
