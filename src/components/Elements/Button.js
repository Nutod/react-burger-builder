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
