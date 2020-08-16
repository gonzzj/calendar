import * as types from '../actions/types';

const initialState = {
	show: false,
	day: 0,
	hour: 0,
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case types.SET_REMINDER:
			return {
				...state
			};

		default:
			return state;
	}
};
