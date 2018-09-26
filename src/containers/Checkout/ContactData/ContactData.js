import React, { Component } from "react";
import styled from "styled-components";

const ContactDataWrapper = styled.div`
  margin: 20px auto;
  widthL 80%;
  text-align: center;

  @media (min-width: 600px) {
    width: 500px
  }
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

	render() {
		return (
			<ContactDataWrapper>
				<h4>Enter Contact Data</h4>
				<form action="" method="post">
					<input type="text" name="name" placeholder="Your Name" />
					<input type="email" name="email" placeholder="Your Email" />
					<input type="text" name="street" placeholder="Your Street" />
					<input type="text" name="postalcode" placeholder="Your Postal Code" />
				</form>
			</ContactDataWrapper>
		);
	}
}

export default ContactData;
