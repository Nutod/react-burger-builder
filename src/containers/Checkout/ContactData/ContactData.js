import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { ButtonSuccess } from "../../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import {
	purchaseBurgerSuccess,
	purchaseBurgerFailed
} from "../../Orders/OrderActions";

const ContactDataWrapper = styled.div`
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

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementtype: "input",
				elementconfig: {
					type: "text",
					placeholder: "Your Name"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			email: {
				elementtype: "input",
				elementconfig: {
					type: "email",
					placeholder: "Your Email"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			street: {
				elementtype: "input",
				elementconfig: {
					type: "text",
					placeholder: "Your Street"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			postalCode: {
				elementtype: "input",
				elementconfig: {
					type: "text",
					placeholder: "Your Postal Code"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			deliveryMethod: {
				elementtype: "select",
				elementconfig: {
					options: [
						{ value: "fastest", displayValue: "Fastest" },
						{ value: "cheapest", displayValue: "Cheapest" }
					]
				},
				value: "fastest",
				validation: {},
				valid: true
			}
		},
		formIsValid: false,
		loading: false
	};

	orderHandler = event => {
		event.preventDefault();
		this.setState({ loading: true });

		const formData = {};
		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[
				formElementIdentifier
			].value;
		}

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData,
			userId: this.props.userId
		};

		console.log(order);

		axios
			.post(
				`https://burger-react-d3b90.firebaseio.com/orders.json?auth=${
					this.props.token
				}`,
				order
			)
			.then(response => {
				this.setState({ loading: false });
				this.props.onPurchaseSuccess(response.data.name, order);
				this.props.history.push("/");
			})
			.catch(error => {
				this.props.onPurchaseFailed(error);
				console.log(error);
			});
	};

	checkValidity = (value, rules) => {
		let isValid = true;

		if (!rules) {
			return true;
		}

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

		if (rules.isNumeric) {
			const pattern = /^\d+$/;
			isValid = pattern.test(value) && isValid;
		}

		return isValid;
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const orderForm = { ...this.state.orderForm };
		const formElement = { ...orderForm[inputIdentifier] };
		formElement.value = event.target.value;
		formElement.valid = this.checkValidity(
			formElement.value,
			formElement.validation
		);
		formElement.touched = true;
		orderForm[inputIdentifier] = formElement;

		// Switched Logic
		let formIsValid = true;
		for (let inputIdentifiers in orderForm) {
			formIsValid = orderForm[inputIdentifiers].valid && formIsValid;
		}
		this.setState({ orderForm, formIsValid });
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}

		// You could also possibly add a shouldValidate prop to the Input Component
		let orderForm = (
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
				<ButtonSuccess disabled={!this.state.formIsValid}>ORDER</ButtonSuccess>
			</form>
		);

		if (this.state.loading) {
			orderForm = <Spinner />;
		}

		return (
			<ContactDataWrapper>
				<h4>Enter Contact Data</h4>
				{orderForm}
			</ContactDataWrapper>
		);
	}
}

const mapStateToProps = state => ({
	token: state.auth.token,
	userId: state.auth.userId
});

const mapDispatchToProps = dispatch => ({
	onPurchaseSuccess: purchaseBurgerSuccess(dispatch),
	onPurchaseFailed: purchaseBurgerFailed(dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(ContactData));
