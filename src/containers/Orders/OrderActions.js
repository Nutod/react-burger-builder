import * as actionTypes from "../../store/actions/actionTypes";

export const purchaseBurgerSuccess = dispatch => (id, data) =>
	dispatch({ type: actionTypes.PURCHASE_BURGER_SUCCESS, id, data });

export const purchaseBurgerFailed = dispatch => () =>
	dispatch({ type: actionTypes.PURCHASE_BURGER_FAILED });
