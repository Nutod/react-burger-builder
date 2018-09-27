import React from "react";
import styled from "styled-components";

const OrderWrapper = styled.div`
	width: 80%;
	border: 1px solid #eee;
	padding: 10px;
	margin: 10px auto;
	box-sizing: border-box;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`;

export default ({ ingredients, price }) => {
	// Loop over the Ingredients
	let ingredient = [];
	for (let key in ingredients) {
		ingredient.push({
			ingredient: key,
			value: ingredients[key]
		});
	}
	console.log(ingredient);
	return (
		<OrderWrapper>
			<p>Ingredients</p>
			{ingredient.map(item => (
				<span
					key={item.ingredient}
					style={{ padding: "5px", border: "1px solid #ccc" }}
				>
					{item.ingredient}: {item.value}
				</span>
			))}
			<p>
				Price: <strong>{price}</strong>
			</p>
		</OrderWrapper>
	);
};
