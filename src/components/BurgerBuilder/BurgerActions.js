// import * as actionTypes from "../../store/actions/actionTypes";

// // Sychronous action creator dispatched in components
// export const addIngredient = ingredient => ({
// 	type: actionTypes.ADD_INGREDIENT,
// 	ingredient
// });

// export const removeIngredient = ingredient => ({
// 	type: actionTypes.REMOVE_INGREDIENT,
// 	ingredient
// });
import * as actionTypes from "../../store/actions/actionTypes";

export const addIngredient = dispatch => {
	return ingredientName =>
		dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName });
};

export const removeIngredient = dispatch => ingredientName =>
	dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName });
