import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "./containers/Layout";
import { logout, authSuccess } from "./containers/auth/AuthActions";
import { checkExpirationTime } from "./shared/expiration";

class App extends Component {
	// Checking for Auth State whenever the Component mounts
	componentDidMount = () => {
		this.checkAuthState();
	};

	// Method to log users in by checking the local storage
	checkAuthState = () => {
		const token = localStorage.getItem("token");
		if (token) {
			const expirationDate = new Date(localStorage.getItem("expirationDate"));
			if (expirationDate <= new Date()) {
				this.props.authLogout();
			} else {
				const userId = localStorage.getItem("userId");
				this.props.authSuccess(token, userId);
				checkExpirationTime(
					(expirationDate.getTime() - new Date().getTime()) / 1000
				);
			}
		}
	};

	render() {
		return (
			<div>
				<Layout />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	authLogout: logout(dispatch),
	authSuccess: authSuccess(dispatch)
});

// Added withRouter HOC to prevent the Component from breaking because of connect
export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(App)
);
