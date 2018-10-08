import * as actionTypes from "../../store/actions/actionTypes";

// Action Creators used with Dependency Injection
export const authStart = dispatch => () =>
	dispatch({ type: actionTypes.AUTH_START });
export const authSuccess = dispatch => (token, userId) =>
	dispatch({
		type: actionTypes.AUTH_SUCCESS,
		idToken: token,
		userId
	});
export const authFail = dispatch => error =>
	dispatch({
		type: actionTypes.AUTH_FAIL,
		error
	});
