import * as types from './types';
import { IReminder } from '../types/types';

export const openReminder = (day: number) => {
	return {
		type: types.OPEN_REMINDER,
		payload: {
			day
		}
	};
};

export const editReminder = (reminder: IReminder, day: number) => {
	return {
		type: types.EDIT_REMINDER,
		payload: {
			reminder,
			day
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

export const saveReminder = (reminder: IReminder) => {
	return {
		type: types.SAVE_REMINDER,
		payload: {
			reminder
		}
	};
};

export const closeReminder = () => {
	return {
		type: types.CLOSE_REMINDER,
	};
};