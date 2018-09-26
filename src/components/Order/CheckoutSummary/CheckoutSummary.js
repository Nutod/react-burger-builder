import React from "react";
import Burger from "../../Burger/Burger";
import {
	ButtonDanger,
	ButtonSuccess
} from "../../Burger/OrderSummary/OrderSummary";
import styled from "styled-components";

const CheckoutSummaryWrapper = styled.div`
	text-align: center;
	width: 100%;
	margin: auto;

	@media (min-width: 600px) {
		width: 500px;
	}
`;

const checkoutSummary = props => {
	return (
		<CheckoutSummaryWrapper>
			<h3>We Hope it tastes nice</h3>
			<div style={{ width: "300px", height: "300px", margin: "auto" }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<ButtonDanger>Cancel</ButtonDanger>
			<ButtonSuccess>Continue</ButtonSuccess>
		</CheckoutSummaryWrapper>
	);
};

export default checkoutSummary;
