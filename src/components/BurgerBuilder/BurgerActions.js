import * as actionTypes from "../../store/actions/actionTypes";

export const addIngredient = dispatch => {
	return ingredientName =>
		dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName });
};

export const removeIngredient = dispatch => ingredientName =>
	dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName });

export const fetchIngredientsSuccess = dispatch => ingredients =>
	dispatch({
		type: actionTypes.FETCH_INGREDIENTS_SUCCESS,
		ingredients
	});

export const fetchIngredientsFailed = dispatch => ingredients =>
	dispatch({
		type: actionTypes.FETCH_INGREDIENTS_FAILED
	});
