import * as actionTypes from "../actions/actionTypes";

const INGREDIENT_PRICES = {
	salad: 1,
	bacon: 1.5,
	meat: 1.3,
	cheese: 1.1
};

const initialState = {
	ingredients: {
		bacon: 0,
		cheese: 0,
		meat: 0,
		salad: 0
	},
	price: 5
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] + 1
				},
				price: state.price + INGREDIENT_PRICES[action.ingredientName]
			};

		case actionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] - 1
				},
				price: state.price - INGREDIENT_PRICES[action.ingredientName]
			};

		default:
			return state;
	}
};
