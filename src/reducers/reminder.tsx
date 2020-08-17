import * as types from '../actions/types';

const initialState = {
	show: false,
	title: '',
	description: '',
	color: ''
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;
	
	switch (type) {
		case types.OPEN_REMINDER:
			return {
				...state,
				show: true,
				day: payload.day,
				hour: payload.hour
			};

		case types.SET_REMINDER_INPUT:
			return {
				...state,
				[payload.key]: payload.value
			};

		case types.SAVE_REMINDER:
		case types.CLOSE_REMINDER:
			return initialState;

		default:
			return state;
	}
};
