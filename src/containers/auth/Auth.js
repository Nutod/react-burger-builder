import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

import Input from "../../components/UI/Input/Input";
import {
	ButtonSuccess,
	ButtonDanger
} from "../../components/Burger/OrderSummary/OrderSummary";
import { authStart, authSuccess, authFail, logout } from "./AuthActions";
import Spinner from "../../components/UI/Spinner/Spinner";

const AuthWrapper = styled.div`
	margin: 20px auto;
	width: 80%;
	text-align: center;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
	border: 1px solid #eee;
	box-sizing: border-box;

	@media (min-width: 600px) {
		width: 500px;
	}
`;

class Auth extends Component {
	state = {
		controls: {
			email: {
				elementtype: "input",
				elementconfig: {
					type: "email",
					placeholder: "Your Email"
				},
				value: "",
				validation: {
					required: true,
					isEmail: false
				},
				valid: false,
				touched: false
			},
			password: {
				elementtype: "input",
				elementconfig: {
					type: "password",
					placeholder: "Your Password"
				},
				value: "",
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		},
		isSignedUp: false
	};

	checkValidity = (value, rules) => {
		let isValid = true;

		if (rules.required) {
			isValid = value.trim() !== "" && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}

		if (rules.isEmail) {
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			isValid = pattern.test(value) && isValid;
		}

		return isValid;
	};

	checkExpirationTime = expirationTime => {
		setTimeout(() => {
			this.props.onLogout();
		}, expirationTime * 1000);
	};

	orderHandler = event => {
		event.preventDefault();
		this.props.onAuthStart();

		const authData = {
			email: this.state.controls.email.value,
			password: this.state.controls.password.value,
			returnSecureToken: true
		};

		let url =
			"https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCyt9qpKlm5bUuUlOs0gZ123IE0CIe9ans";

		if (this.state.isSignedUp) {
			url =
				"https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCyt9qpKlm5bUuUlOs0gZ123IE0CIe9ans";
		}

		axios
			.post(url, authData)
			.then(response => {
				console.log(response.data);
				this.authSuccess(response);
				this.checkExpirationTime(response.data.expiresIn);
				this.redirectUser();
			})
			.catch(error => {
				console.log(error);
				this.props.onAuthFail(error.response.data.error.message);
			});
	};

	inputChangedHandler = (event, controlName) => {
		const controls = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: this.checkValidity(
					event.target.value,
					this.state.controls[controlName].validation
				),
				touched: true
			}
		};

		this.setState({ controls });
	};

	swithAuthMode = () => {
		this.setState(prevState => ({ isSignedUp: !prevState.isSignedUp }));
	};

	redirectUser() {
		if (this.props.building) {
			this.props.history.push("/checkout");
		} else {
			this.props.history.push("/");
		}
	}

	authSuccess(response) {
		this.props.onAuthSuccess(response.data.idToken, response.data.localId);
	}

	render() {
		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		}

		let errorMessage = null;

		if (this.props.error) {
			errorMessage = <p>{this.props.error.message}</p>;
		}

		let form = (
			<Fragment>
				<h4>SIGN IN</h4>
				{errorMessage}
				<form onSubmit={this.orderHandler}>
					{formElementsArray.map(formElement => (
						<Input
							key={formElement.id}
							elementtype={formElement.config.elementtype}
							elementconfig={formElement.config.elementconfig}
							value={formElement.config.value}
							invalid={!formElement.config.valid}
							touched={formElement.config.touched}
							changed={event => this.inputChangedHandler(event, formElement.id)}
						/>
					))}
					<ButtonSuccess>SUBMIT</ButtonSuccess>
				</form>
				<ButtonDanger onClick={this.swithAuthMode}>
					SWITCH TO {!this.state.isSignedUp ? "SIGN UP" : "SIGN IN"}
				</ButtonDanger>
			</Fragment>
		);

		if (this.props.loading) {
			form = <Spinner />;
		}

		return <AuthWrapper>{form}</AuthWrapper>;
	}
}

const mapStateToProps = state => ({
	loading: state.auth.loading,
	error: state.auth.error,
	building: state.burger.building
});

const mapDispatchToProps = dispatch => ({
	onAuthStart: authStart(dispatch),
	onAuthSuccess: authSuccess(dispatch),
	onAuthFail: authFail(dispatch),
	onLogout: logout(dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Auth);
