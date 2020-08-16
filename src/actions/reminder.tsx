import * as types from './types';

export const setReminder = (day: number, hour: Date) => {
	return {
		type: types.SET_REMINDER,
		payload: {
			day,
			hour
		}
	};
};