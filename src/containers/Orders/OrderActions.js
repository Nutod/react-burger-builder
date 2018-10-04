import * as actionTypes from "../../store/actions/actionTypes";

export const purchaseBurgerSuccess = dispatch => id =>
	dispatch({ type: actionTypes.PURCHASE_BURGER_SUCCESS, id });

export const purchaseBurgerFailed = dispatch => () =>
	dispatch({ type: actionTypes.PURCHASE_BURGER_FAILED });
