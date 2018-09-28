import React, { Fragment } from "react";
import styled from "styled-components";

export const Button = styled.button`
	background-color: transparent;
	border: none;
	color: white;
	outline: none;
	cursor: pointer;
	font: inherit;
	padding: 10px;
	margin: 10px;
	font-weight: bold;

	&:first-of-type {
		margin-left: 0;
		padding-left: 0;
	}
`;
export const ButtonSuccess = styled(Button)`
	color: #5c9210;

	&:disabled {
		color: #ccc;
		cursor: not-allowed;
	}
`;

export const ButtonDanger = styled(Button)`
	color: #944317;
`;

export default ({ ingredients, continued, cancelled, price }) => {
	const item = Object.keys(ingredients).map(ingredient => (
		<li key={ingredient}>
			{ingredient}: {ingredients[ingredient]}
		</li>
	));

	return (
		<Fragment>
			<h3>Here's your Order</h3>
			<p>With the following items:</p>
			<ul>{item}</ul>
			<p>
				Price: <strong>{price.toFixed(2)}</strong>
			</p>
			<p>Continue to Checkout?</p>
			<ButtonDanger onClick={cancelled}>CANCEL</ButtonDanger>
			<ButtonSuccess onClick={continued}>CONTINUE</ButtonSuccess>
		</Fragment>
	);
};
