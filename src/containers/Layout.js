import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import BurgerBuilder from "../components/BurgerBuilder/BurgerBuilder";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import asyncComponent from "../HOCs/asyncComponent/asyncComponent";

const asyncCheckout = asyncComponent(() => {
	return import("./Checkout/Checkout");
});

const asyncOrders = asyncComponent(() => {
	return import("./Orders/Orders");
});

const asyncAuth = asyncComponent(() => {
	return import("./auth/Auth");
});

const asyncLogout = asyncComponent(() => {
	return import("./auth/Logout/Logout");
});

// Running yarn eject means you still have to run npm install afterwards as the entire app breaks as of React 16.5

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerOpenHandler = () => {
		this.setState({ showSideDrawer: true });
	};

	sideDrawerCloseHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	render() {
		let routes = (
			<Switch>
				<Route path="/auth" component={asyncAuth} />
				<Route path="/" exact component={BurgerBuilder} />
				<Redirect to="/" />
			</Switch>
		);

		if (this.props.isAuthenticated) {
			routes = (
				<Switch>
					<Route path="/orders" component={asyncOrders} />
					<Route path="/auth" component={asyncAuth} />
					<Route path="/checkout" component={asyncCheckout} />
					<Route path="/logout" component={asyncLogout} />
					<Route path="/" exact component={BurgerBuilder} />
					<Redirect to="/" />
				</Switch>
			);
		}
		return (
			<Fragment>
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerCloseHandler}
					authenticated={this.props.isAuthenticated}
				/>
				<Toolbar
					openSidebar={this.sideDrawerOpenHandler}
					authenticated={this.props.isAuthenticated}
				/>
				<main>{routes}</main>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.token !== null
});

export default withRouter(connect(mapStateToProps)(Layout));
