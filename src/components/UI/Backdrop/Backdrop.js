import React from "react";
import styled from "styled-components";

const BackdropWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.3);
`;

export default ({ show, clicked }) =>
	show ? <BackdropWrapper onClick={clicked} /> : null;
