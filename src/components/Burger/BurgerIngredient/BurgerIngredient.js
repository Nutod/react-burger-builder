import React, { Component } from "react";
import "./BurgerIngredient.css";
import styled from "styled-components";

const BreadBottom = styled.div`
	height: 13%;
	width: 80%;
	background: linear-gradient(#f08e4a, #e27b36);
	border-radius: 0 0 30px 30px;
	box-shadow: inset -15px 0 #c15711;
	margin: 2% auto;
`;

const Salad = styled.div`
	width: 85%;
	height: 7%;
	margin: 2% auto;
	background: linear-gradient(#228c1d, #91ce50);
	border-radius: 20px;
`;

// TODO: Possible refactor to use Functional Component
export default class BurgerIngredient extends Component {
	render() {
		const { type } = this.props;
		let ingredient = null;

		switch (type) {
			case "bread-bottom":
				ingredient = <BreadBottom />;
				break;
			// case "bread-top":
			// 	ingredient = (
			// 		<div className="BreadTop">
			// 			<div className="Seeds1" />
			// 			<div className="Seeds2" />
			// 		</div>
			// 	);
			// 	break;
			// case "meat":
			// 	ingredient = <div className="Meat" />;
			// 	break;
			// case "bacon":
			// 	ingredient = <div className="Bacon" />;
			// 	break;
			case "salad":
				ingredient = <Salad />;
				break;
			// case "cheese":
			// 	ingredient = <div className="Cheese" />;
			// 	break;
			default:
				break;
		}
		return <div>{ingredient}</div>;
	}
}
