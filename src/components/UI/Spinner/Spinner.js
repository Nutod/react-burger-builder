import React from "react";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
	color: #ff8000;
	font-size: 10px;
	margin: 80px auto;
	position: relative;
	text-indent: -9999em;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation-delay: -0.16s;
	animation-delay: -0.16s;

	&:before,
	&:after {
		border-radius: 50%;
		width: 2.5em;
		height: 2.5em;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		-webkit-animation: load7 1.8s infinite ease-in-out;
		animation: load7 1.8s infinite ease-in-out;
	}

	&:before,
	&:after {
		content: "";
		position: absolute;
		top: 0;
	}

	&:before {
		left: -3.5em;
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}

	&:after {
		left: 3.5em;
	}
`;

export default () => <SpinnerWrapper />;
