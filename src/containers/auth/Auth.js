import React, { Component } from "react";
import styled from "styled-components";
import Input from "../../components/UI/Input/Input";
import { ButtonSuccess } from "../../components/Burger/OrderSummary/OrderSummary";

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
					type: "text",
					placeholder: "Your Email"
				},
				value: "",
				validation: {
					required: true
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
					required: true
				},
				valid: false,
				touched: false
			}
		}
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

	orderHandler = () => {
		// Do something Here
	};

	inputChangedHandler = (event, controlName) => {};

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
					<ButtonSuccess disabled={!this.state.formIsValid}>
						ORDER
					</ButtonSuccess>
				</form>
			</AuthWrapper>
		);
	}
}

export default Auth;
