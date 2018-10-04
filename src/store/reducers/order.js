import * as actionTypes from "../../store/actions/actionTypes";

const initialState = {
	orders: []
};

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PURCHASE_BURGER_SUCCESS:
			const newOrder = {
				...action.data,
				id: action.id
			};
			return {
				...state,
				orders: state.orders.concat(newOrder)
			};

		case actionTypes.PURCHASE_BURGER_FAILED:
			return {
				...state
			};

		default:
			return state;
	}
};
