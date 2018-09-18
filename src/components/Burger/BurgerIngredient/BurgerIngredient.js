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

const BreadTop = styled.div`
	height: 20%;
	width: 80%;
	background: linear-gradient(#bc581e, #e27b36);
	border-radius: 50% 50% 0 0;
	box-shadow: inset -15px 0 #c15711;
	margin: 2% auto;
	position: relative;
`;

const Seeds1 = styled.div`
	width: 10%;
	height: 15%;
	position: absolute;
	background-color: white;
	left: 30%;
	top: 50%;
	border-radius: 40%;
	transform: rotate(-20deg);
	box-shadow: inset -2px -3px #c9c9c9;

	&::before {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: white;
		left: 180%;
		top: -50%;
		border-radius: 40%;
		transform: rotate(60deg);
		box-shadow: inset -1px -3px #c9c9c9;
	}

	&::after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: white;
		left: -170%;
		top: -260%;
		border-radius: 40%;
		transform: rotate(60deg);
		box-shadow: inset -1px 2px #c9c9c9;
	}
`;

// const Seeds2 = styled.div`

// `

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
