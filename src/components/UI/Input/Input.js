import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
`;

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
			inputElement = <Input {...props} />;
			break;
		default:
			inputElement = <p>Input not recognised</p>;
			break;
	}

	return (
		<InputWrapper>
			<label>{props.label}</label>
			{inputElement}
		</InputWrapper>
	);
};
