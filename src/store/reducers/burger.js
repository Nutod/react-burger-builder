import * as actionTypes from "../actions/actionTypes";

const INGREDIENT_PRICES = {
	salad: 1,
	bacon: 1.5,
	meat: 1.3,
	cheese: 1.1
};

const initialState = {
	ingredients: null,
	price: 5,
	loading: false,
	error: false,
	building: false
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
				price: state.price + INGREDIENT_PRICES[action.ingredientName],
				building: true
			};

		case actionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] - 1
				},
				price: state.price - INGREDIENT_PRICES[action.ingredientName],
				building: true
			};

		case actionTypes.FETCH_INGREDIENTS_START:
			return {
				...state
			};

		case actionTypes.FETCH_INGREDIENTS_SUCCESS:
			return {
				...state,
				ingredients: { ...action.ingredients },
				price: 5,
				error: false,
				building: false
			};

		case actionTypes.FETCH_INGREDIENTS_FAILED:
			return {
				...state,
				error: true,
				building: false
			};

		default:
			return state;
	}
};
