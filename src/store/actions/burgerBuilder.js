import * as actionTypes from "./actionTypes";

// Sychronous action creator dispatched in components
export const addIngredient = ingredient => ({
	type: actionTypes.ADD_INGREDIENT,
	ingredient
});

export const removeIngredient = ingredient => ({
	type: actionTypes.REMOVE_INGREDIENT,
	ingredient
});
