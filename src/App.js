import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "./containers/Layout";
import { logout } from "./containers/auth/AuthActions";

class App extends Component {
	componentDidMount = () => {
		console.log(this.props);
	};

	checkAuthState = () => {
		const token = localStorage.getItem("token");
		if (token) {
			const expirationDate = localStorage.getItem("expirationDate");
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
	onLogout: logout(dispatch)
});

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(App)
);
