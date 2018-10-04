import * as actionTypes from "../../store/actions/actionTypes";
import axios from "axios";

export const addIngredient = dispatch => {
	return ingredientName =>
		dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName });
};

export const removeIngredient = dispatch => ingredientName =>
	dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName });

export const setIngredients = ingredients => ({
	type: actionTypes.SET_INGREDIENTS,
	ingredients
});

export const fetchIngredients = () => dispatch => {
	axios
		.get("https://burger-react-d3b90.firebaseio.com/ingredients.json")
		.then(response => {
			console.log(response.data);
			dispatch(setIngredients(response.data));
		})
		.catch(error => console.log(error));
};
