import * as types from './types';

export const setMonth = (month: number, year: number) => {
	return {
		type: types.SET_MONTH,
		payload: {
			year, 
			month
		}
	};
};

export const setReminder = (day: number, hour: Date) => {
	return {
		type: types.SET_REMINDER,
		payload: {
			day,
			hour
		}
	};
};
