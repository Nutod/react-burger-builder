import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
`;

const Label = styled.label`
	display: block;
	font-weight: bold;
	margin-bottom: 8px;
`;

const Select = styled.select`
	width: 84%;
	font-family: inherit;
	padding: 5px 10px;
	background-color: #fff;
	border: 1px solid #ccc;
`;

const Input = styled.input`
	outline: none;
	width: 80%;
	font-family: inherit;
	padding: 5px 10px;
	background-color: #fff;
	border: 1px solid #ccc;

	&:hover {
		outline: none;
		background-color: #ccc;
	}
`;

export default props => {
	let inputElement = null;
	switch (props.elementtype) {
		case "input":
			inputElement = <Input {...props.elementconfig} value={props.value} />;
			break;
		case "select":
			inputElement = (
				<Select value={props.value}>
					{props.elementconfig.options.map(option => (
						<option value={option.value}>{option.displayValue}</option>
					))}
				</Select>
			);
			break;
		default:
			inputElement = <p>Input not recognised</p>;
			break;
	}

	return (
		<InputWrapper>
			<Label>{props.label}</Label>
			{inputElement}
		</InputWrapper>
	);
};
