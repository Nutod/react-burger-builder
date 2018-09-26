import React, { Component } from "react";
import styled from "styled-components";
import { ButtonSuccess } from "../../../components/Burger/OrderSummary/OrderSummary";

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

const Input = styled.input`
	display: block;
	width: 40vw;
	font-family: inherit;
	padding: 5px;
	margin: 5px auto;
`;

class ContactData extends Component {
	state = {
		name: "",
		email: "",
		address: {
			street: "",
			postalCode: ""
		}
	};

	orderHandler = event => {
		event.preventDefault();
		alert("Someone clicked something...");
	};

	render() {
		return (
			<ContactDataWrapper>
				<h4>Enter Contact Data</h4>
				<form onSubmit={this.orderHandler}>
					<Input type="text" name="name" placeholder="Your Name" />
					<Input type="email" name="email" placeholder="Your Email" />
					<Input type="text" name="street" placeholder="Your Street" />
					<Input type="text" name="postalcode" placeholder="Your Postal Code" />
					<ButtonSuccess>ORDER</ButtonSuccess>
				</form>
			</ContactDataWrapper>
		);
	}
}

export default ContactData;
