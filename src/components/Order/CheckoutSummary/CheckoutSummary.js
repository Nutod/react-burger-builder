import React from "react";
import Burger from "../../Burger/Burger";
import {
	ButtonDanger,
	ButtonSuccess
} from "../../Burger/OrderSummary/OrderSummary";
import styled from 'styled-components'

const checkoutSummaryWrapper = styled.div`
	text-align: center;
	width: 80%;
	margin: auto;

	@media (min-width: 600px) {
		width: 500px;
	}
`

const checkoutSummary = props => {
	return (
		<checkoutSummaryWrapper>
			<h3>We Hope it tastes nice</h3>
			<div style={{ width: "300px", height: "300px", margin: "auto" }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<ButtonDanger>Cancel</ButtonDanger>
			<ButtonSuccess>Continue</ButtonSuccess>
		</checkoutSummaryWrapper>
	);
};

export default checkoutSummary;
