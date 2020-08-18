import * as types from '../actions/types';

const initialState = {
	show: false,
	data: {
		title: '',
		hour: '',
		description: '',
		backgroundColor: ''
	}
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;
	
	switch (type) {
		case types.OPEN_REMINDER:
			return {
				...state,
				show: true,
				data: {
					day: payload.day
				}
			};

		case types.EDIT_REMINDER:
			return {
				...state,
				show: true,
				data: {
					id: payload.reminder.id,
					title: payload.reminder.title,
					hour: payload.reminder.hour,
					description: payload.reminder.description,
					backgroundColor: payload.reminder.backgroundColor,
					day: payload.day
				}
			};

		case types.SET_REMINDER_INPUT:
			return {
				...state,
				data: {
					...state.data,
					[payload.key]: payload.value
				}
			};

		case types.SAVE_REMINDER:
		case types.CLOSE_REMINDER:
			return initialState;

		default:
			return state;
	}
};
