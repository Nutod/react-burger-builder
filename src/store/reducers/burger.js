import * as actionTypes from "../actions/actionTypes";

const INGREDIENT_PRICES = {
	salad: 50,
	bacon: 200,
	meat: 130,
	cheese: 100
};

const initialState = {
	ingredients: null,
	price: 500,
	loading: false,
	error: false,
	building: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			return addIngredient(state, action);

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
				price: 500,
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
function addIngredient(state, action) {
	return {
		...state,
		ingredients: {
			...state.ingredients,
			[action.ingredientName]: state.ingredients[action.ingredientName] + 1
		},
		price: state.price + INGREDIENT_PRICES[action.ingredientName],
		building: true
	};
}
