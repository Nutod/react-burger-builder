import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input';
import { ButtonSuccess } from '../../components/Burger/OrderSummary/OrderSummary';

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
      },
    }
  }

  orderHandler = () => {
    // Do something Here
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    return (
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
    )
  }
}

export default Auth;