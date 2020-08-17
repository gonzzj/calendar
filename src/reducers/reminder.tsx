import * as types from '../actions/types';

const initialState = {
	show: false,
	title: '',
	hour: '',
	description: '',
	backgroundColor: ''
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;
	
	switch (type) {
		case types.OPEN_REMINDER:
			return {
				...state,
				show: true,
				day: payload.day
			};

		case types.EDIT_REMINDER:
			return {
				...state,
				show: true,
				title: payload.reminder.title,
				hour: payload.reminder.hour,
				description: payload.reminder.description,
				backgroundColor: payload.reminder.backgroundColor
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
