import React, { Component, Fragment } from "react";
import BurgerBuilder from "../components/BurgerBuilder/BurgerBuilder";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";

// Running yarn eject means you still have to run npm install afterwards as the entire app breaks as of React 16.5

// Main tag added for semantic purposes
export default class Layout extends Component {
	render() {
		return (
			<Fragment>
				<SideDrawer />
				<Toolbar />
				<main>
					<BurgerBuilder />
				</main>
			</Fragment>
		);
	}
}
