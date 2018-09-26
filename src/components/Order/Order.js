import React from "react";
import styled from "styled-components";

const OrderWrapper = styled.div`
	width: 100%;
	border: 1px solid #eee;
	padding: 10px;
	margin: 10px 0px;
	box-sizing: border-box;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`;

export default () => (
	<OrderWrapper>
		<p>Ingredient: Salad</p>
	</OrderWrapper>
);
