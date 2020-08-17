import * as types from './types';

export const openReminder = (day: number, hour: Date) => {
	return {
		type: types.OPEN_REMINDER,
		payload: {
			day,
			hour
		}
	};
};

export const setReminderInput = (value: string, key: string) => {
	return {
		type: types.SET_REMINDER_INPUT,
		payload: {
			value,
			key
		}
	};
};

export const saveReminder = (day: number, hour: Date, title: string, description: string) => {
	return {
		type: types.SAVE_REMINDER,
		payload: {
			day,
			hour,
			title,
			description
		}
	};
};

export const closeReminder = () => {
	return {
		type: types.CLOSE_REMINDER,
	};
};