import React from "react";
import styled from "styled-components";

const BuildControlWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	display: block;
	font: inherit;
	padding: 5px;
	margin: 0;
	width: 80px;
	border: 1px solid #aa6817;
	cursor: pointer;
	outline: none;

	&:disabled {
		background-color: #ac9980;
		border: 1px solid #7e7365;
		color: #ccc;
		cursor: default;
	}

	&:hover:disabled {
		background-color: #ac9980;
		color: #ccc;
		cursor: not-allowed;
	}
`;

const Label = styled.p`
	padding: 10px;
	font-weight: bold;
	width: 80px;
`;

const ButtonLess = styled(Button)`
	background-color: #d39952;
	color: white;
	margin-right: 3px;

	&:hover {
		background-color: #daa972;
		color: white;
	}

	&:active {
		background-color: #daa972;
		color: white;
	}
`;

const ButtonMore = styled(Button)`
	background-color: #8f5e1e;
	color: white;

	&:hover {
		background-color: #99703f;
		color: white;
	}

	&:active {
		background-color: #99703f;
		color: white;
	}
`;

export default ({ label, added, removed, disable }) => {
	return (
		<BuildControlWrapper>
			<Label>{label}</Label>
			<ButtonLess onClick={removed} disabled={disable}>
				Less
			</ButtonLess>
			<ButtonMore onClick={added}>More</ButtonMore>
		</BuildControlWrapper>
	);
};
