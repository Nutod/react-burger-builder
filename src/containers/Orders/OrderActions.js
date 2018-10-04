import * as actionTypes from "../../store/actions/actionTypes";

export const purchaseBurgerSuccess = dispatch => (id, data) =>
	dispatch({ type: actionTypes.PURCHASE_BURGER_SUCCESS, id, data });

export const purchaseBurgerFailed = dispatch => error =>
	dispatch({ type: actionTypes.PURCHASE_BURGER_FAILED, error });

export const fetchOrdersSuccess = dispatch => orders =>
	dispatch({ type: actionTypes.FETCH_ORDERS_SUCCESS, orders });

export const fetchOrdersFail = dispatch => error =>
	dispatch({ type: actionTypes.FETCH_ORDERS_FAIL, error });
