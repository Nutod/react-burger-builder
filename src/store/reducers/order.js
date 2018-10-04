import * as actionTypes from "../../store/actions/actionTypes";

const initialState = {
	orders: []
};

export default (state = initialState, action) => {
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

		case actionTypes.FETCH_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.orders
			};
		case actionTypes.FETCH_ORDERS_FAIL:
			return {
				...state
			};
		default:
			return state;
	}
};
