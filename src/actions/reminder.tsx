import * as types from './types';

export const openReminder = (day: number) => {
	return {
		type: types.OPEN_REMINDER,
		payload: {
			day
		}
	};
};

export const editReminder = (reminder: any) => {
	return {
		type: types.EDIT_REMINDER,
		payload: {
			reminder
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

export const saveReminder = (day: number, hour: string, title: string, description: string, backgroundColor: string) => {
	return {
		type: types.SAVE_REMINDER,
		payload: {
			day,
			hour,
			title,
			description,
			backgroundColor
		}
	};
};

export const closeReminder = () => {
	return {
		type: types.CLOSE_REMINDER,
	};
};