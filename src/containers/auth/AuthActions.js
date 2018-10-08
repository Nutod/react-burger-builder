import * as actionTypes from "../../store/actions/actionTypes";

// Action Creators used with Dependency Injection
export const authStart = dispatch => () => ({ type: actionTypes.AUTH_START });
export const authSuccess = dispatch => authData => ({
	type: actionTypes.AUTH_SUCCESS,
	authData
});
export const authFail = dispatch => () => ({ type: actionTypes.AUTH_FAIL });
