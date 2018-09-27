import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ButtonSuccess } from "../../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

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
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Your Name"
				},
				value: ""
			},
			email: {
				elementType: "input",
				elementConfig: {
					type: "email",
					placeholder: "Your Email"
				},
				value: ""
			},
			street: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Your Street"
				},
				value: ""
			},
			postalCode: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Your Postal Code"
				},
				value: ""
			},
			deliveryMethod: {
				elementType: "select",
				elementConfig: {
					options: [
						{ value: "fastest", displayValue: "Fastest" },
						{ value: "cheapest", displayValue: "Cheapest" }
					]
				}
			}
		},
		loading: false
	};

	orderHandler = event => {
		event.preventDefault();
		this.setState({ loading: true });
		axios
			.post("https://burger-react-d3b90.firebaseio.com/orders.json", {
				ingredients: this.props.ingredients,
				price: this.props.price
			})
			.then(response => {
				this.setState({ loading: false });
				this.props.history.push("/");
			})
			.catch(error => console.log(error));
	};

	render() {
		let orderForm = (
			<form onSubmit={this.orderHandler}>
				<Input
					inputtype="input"
					type="text"
					name="name"
					placeholder="Your Name"
				/>
				<Input
					inputtype="input"
					type="email"
					name="email"
					placeholder="Your Email"
				/>
				<Input
					inputtype="input"
					type="text"
					name="street"
					placeholder="Your Street"
				/>
				<Input
					inputtype="input"
					type="text"
					name="postalcode"
					placeholder="Your Postal Code"
				/>
				<ButtonSuccess>ORDER</ButtonSuccess>
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

export default withRouter(ContactData);
