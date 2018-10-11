import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../AuthActions";

class Logout extends Component {
	componentDidMount = () => {
		this.props.onLogout();
	};

	render() {
		return <Redirect to="/" />;
	}
}

const mapDispatchToProps = dispatch => ({
	onLogout: logout(dispatch)
});

export default connect(
	null,
	mapDispatchToProps
)(Logout);
