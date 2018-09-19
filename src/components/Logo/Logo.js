import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import styled from "styled-components";

const LogoWrapper = styled.div`
	background-color: #fff;
	padding: 8px;
	height: 80%;
	box-sizing: border-box;
	border-radius: 5px;
`;

const LogoImage = styled.img`
	height: 100%;
`;

export default () => (
	<LogoWrapper>
		<LogoImage src={burgerLogo} alt="Logo" />
	</LogoWrapper>
);
