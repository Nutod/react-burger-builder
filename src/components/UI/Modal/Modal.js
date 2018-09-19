import React, { Fragment } from "react";
import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";

const ModalWrapper = styled.div`
		position: fixed;
		z-index: 500;
		background-color: white;
		width: 70%;
		border: 1px solid #ccc;
		box-shadow: 1px 1px 1px black;
		padding: 16px;
		left: 15%;
		top: 30%;
		box-sizing: border-box;
		transition: all 0.3s ease-out;

	@media (min-width: 600px) {
		.Modal {
			width: 500px;
			left: calc(50% - 250px);
		}
`;

// Added the style for animation purposes
export default ({ children, show, modalClosed }) => (
	<Fragment>
		<Backdrop show={show} clicked={modalClosed} />
		<ModalWrapper
			style={{
				transform: show ? "translateY(-10vh)" : "translateY(-100vh)",
				opacity: show ? "1" : "0"
			}}
		>
			{children}
		</ModalWrapper>
	</Fragment>
);