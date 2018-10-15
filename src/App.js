import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "./containers/Layout";
import { logout, authSuccess } from "./containers/auth/AuthActions";

class App extends Component {
	componentDidMount = () => {
		this.checkAuthState();
	};

	checkExpirationTime = expirationTime => {
		setTimeout(() => {
			this.props.authLogout();
		}, expirationTime * 1000);
	};

	checkAuthState = () => {
		console.log("Checking Auth State");
		const token = localStorage.getItem("token");
		if (token) {
			const expirationDate = new Date(localStorage.getItem("expirationDate"));
			if (expirationDate <= new Date()) {
				this.props.authLogout();
			} else {
				const userId = localStorage.getItem("userId");
				this.props.authSuccess(token, userId);
				this.checkExpirationTime(
					(expirationDate.getTime() - new Date().getTime()) / 1000
				);
			}
		} else {
			console.log("Not logged in initially");
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

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(App)
);
