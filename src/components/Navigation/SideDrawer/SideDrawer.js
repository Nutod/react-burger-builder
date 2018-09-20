import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styled from "styled-components";
import Backdrop from "../../UI/Backdrop/Backdrop";

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
	transition: transform 1s ease-out;

	@media (min-width: 500px) {
		display: none;
	}
`;

const SideDrawerClose = styled(SideDrawerWrapper)`
	transform: translateX(-100%);
`;

export default ({ open, closed }) => {
	let sideDrawer = (
		<SideDrawerWrapper>
			<Logo logoHeight="11%" />
			<nav style={{ marginTop: "-50vh", marginLeft: "10px" }}>
				<NavigationItems />
			</nav>
		</SideDrawerWrapper>
	);
	if (!open) {
		sideDrawer = (
			<SideDrawerClose>
				<Logo logoHeight="11%" />
				<nav style={{ marginTop: "-50vh", marginLeft: "10px" }}>
					<NavigationItems />
				</nav>
			</SideDrawerClose>
		);
	}
	return (
		<Fragment>
			<Backdrop show={open} clicked={closed} />
			{sideDrawer}
		</Fragment>
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
