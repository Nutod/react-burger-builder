import React from "react";
import styled from "styled-components";
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

const controls = [
	{ type: "bacon" },
	{ type: "cheese" },
	{ type: "meat" },
	{ type: "salad" }
];

export default ({ addIngredient }) => {
	return (
		<BuildControlsWrapper>
			{controls.map(control => (
				<BuildControl
					key={control.type}
					label={control.type}
					added={() => addIngredient(control.type)}
				/>
			))}
		</BuildControlsWrapper>
	);
};
