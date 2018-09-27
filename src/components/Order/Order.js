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
	console.log(ingredients);
	return (
		<OrderWrapper>
			<p>Ingredient: Salad</p>
			<p>
				Price: <strong>{price}</strong>
			</p>
		</OrderWrapper>
	);
};
