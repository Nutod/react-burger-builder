import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

import Input from "../../components/UI/Input/Input";
import {
	ButtonSuccess,
	ButtonDanger
} from "../../components/Burger/OrderSummary/OrderSummary";
import { authStart, authSuccess, authFail } from "./AuthActions";

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

	orderHandler = event => {
		event.preventDefault();

		const authData = {
			email: this.state.controls.email.value,
			password: this.state.controls.password.value,
			returnSecureToken: true
		};
		// Reach out to the Web from here
		axios
			.post(
				"https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCyt9qpKlm5bUuUlOs0gZ123IE0CIe9ans",
				authData
			)
			.then(response => {
				console.log(response.data);
				this.props.onAuthSuccess(response.data);
			})
			.catch(error => {
				console.log(error);
				this.props.onAuthFail(error);
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

	render() {
		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		}

		return (
			<AuthWrapper>
				<h4>Sign In</h4>
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
					<ButtonSuccess>
						{this.state.isSignedUp ? "Sign In" : "Sign Up"}
					</ButtonSuccess>
				</form>
				<ButtonDanger onClick={this.swithAuthMode}>
					Swittch to {!this.state.isSignedUp ? "Sign In" : "Sign Up"}
				</ButtonDanger>
			</AuthWrapper>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onAuthStart: authStart(dispatch),
	onAuthSuccess: authSuccess(dispatch),
	onAuthFail: authFail(dispatch)
});

export default connect(
	null,
	mapDispatchToProps
)(Auth);
