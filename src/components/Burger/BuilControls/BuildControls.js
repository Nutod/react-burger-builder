import React from "react";
import styled, { keyframes } from "styled-components";
import BuildControl from "./BuildControl/BuildControl";

const BuildControlsWrapper = styled.div`
	width: 100%;
	background-color: #cf8f2e;
	display: flex;
	flex-direction: column;
	text-align: center;
	box-shadow: 0 2px 1px #ccc;
	padding: 10px 0;
	margin: auto;
`;

const enable = keyframes`
0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const OrderButton = styled.button`
	background-color: #dad735;
	outline: none;
	cursor: pointer;
	border: 1px solid #966909;
	color: #966909;
	font-family: inherit;
	font-size: 1.2em;
	padding: 15px 30px;
	box-shadow: 2px 2px 2px #966909;
	width: 50vw;
	margin: 0 auto;
	margin-top: -4rem;
	text-transform: uppercase;

	&:disabled {
		background-color: #c7c6c6;
		cursor: not-allowed;
		border: 1px solid #ccc;
		color: #888888;
	}

	&:hover {
		background-color: #a0db41;
		border: 1px solid #966909;
		color: #966909;
	}

	&:active {
		background-color: #a0db41;
		border: 1px solid #966909;
		color: #966909;
	}

	&:not(:disabled) {
		animation: ${enable} 0.3s linear;
	}
`;

// const ButtonSuccess = styled(OrderButton)`
// 	color: #5c9210;
// `;

// const ButtonDanger = styled(OrderButton)`
// 	color: #944317;
// `;

const controls = [
	{ type: "bacon" },
	{ type: "cheese" },
	{ type: "meat" },
	{ type: "salad" }
];

// TODO: Use Portal for opening the Modal
export default ({
	addIngredient,
	removeIngredient,
	disabled,
	price,
	purchaseable,
	ordered
}) => {
	return (
		<BuildControlsWrapper>
			<p>
				Current Price: <strong>{price.toFixed(2)}</strong>
			</p>
			{controls.map(control => (
				<BuildControl
					key={control.type}
					label={control.type}
					added={() => addIngredient(control.type)}
					removed={() => removeIngredient(control.type)}
					disable={disabled[control.type]}
				/>
			))}
			<OrderButton disabled={!purchaseable} onClick={ordered}>
				Order Now
				{/* <span role="img">🚀</span> */}
			</OrderButton>
		</BuildControlsWrapper>
	);
};
