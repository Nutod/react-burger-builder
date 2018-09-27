import React from "react";
import styled from "styled-components";

const Input = styled.input`
	display: block;
	width: 40vw;
	font-family: inherit;
	padding: 5px;
	margin: 5px auto;
`;

export default props => {
	let inputElement = null;
	switch (props.type) {
		case "input":
			inputElement = <Input />;
			break;
		default:
			break;
	}

	return (
		<div>
			<label>{props.label}</label>
			{inputElement}
		</div>
	);
};
