import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styled from "styled-components";

const SideDrawerWrapper = styled.div`
	position: fixed;
	width: 280px;
	max-width: 70%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 200;
	background-color: white;
	padding: 32px 16px;
	box-sizing: border-box;
	transition: transform 0.3s ease-out;

	@media (min - width: 500px) {
		display: none;
	}
`;

export default () => {
	return (
		<SideDrawerWrapper>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</SideDrawerWrapper>
	);
};

// .Open {
//   transform: translateX(0);
// }

// .Close {
//   transform: translateX(-100 %);
// }

// .Logo {
//   height: 11 %;
//   margin - bottom: 32px;
// }
