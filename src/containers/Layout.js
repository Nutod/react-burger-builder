import React, { Component, Fragment } from "react";
import BurgerBuilder from "../components/BurgerBuilder/BurgerBuilder";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Checkout from "./Checkout/Checkout";
import Orders from "./Orders/Orders";
import Auth from "./auth/Auth";

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
				<main style={{ marginTop: "7rem" }}>
					<Switch>
						<Route path="/orders" component={Orders} />
						<Route path="/checkout" component={Checkout} />
						<Route path="/auth" component={Auth} />
						<Route path="/" exact component={BurgerBuilder} />
					</Switch>
				</main>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.token !== null
});

export default withRouter(connect(mapStateToProps)(Layout));
