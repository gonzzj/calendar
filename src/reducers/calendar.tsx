import * as types from '../actions/types';
import { isUndefined, remove } from 'lodash';
import { IDay } from '../types/types';

const initialState = {
	month: [],
	showList: false
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case types.SET_MONTH:
			const monthIndex = payload.month - 1;
			const date = new Date(payload.year, monthIndex, 1);
			const result = [];

			while (date.getMonth() === monthIndex) {
				result.push({
					number: date.getDate(),
					reminders: []
				});
				
				date.setDate(date.getDate() + 1);
			}

			return {
				...state,
				month: result,
			};
		
		case types.OPEN_LIST:
			return {
				...state,
				showList: true,
				selectedDay: payload.day
			}

		case types.OPEN_REMINDER:
		case types.CLOSE_LIST:
			return {
				...state,
				showList: false
			}
			
		case types.SAVE_REMINDER:
			const newMonth: Array<IDay> = [...state.month];
			const dataReminder = payload.reminder;
			
			const newReminder = {
				id: dataReminder?.id,
				hour: dataReminder.hour,
				title: dataReminder.title,
				description: dataReminder?.description,
				backgroundColor: dataReminder.backgroundColor || "#3273dc",
				day: dataReminder.day
			};

			for (const day of newMonth) {
				if(day.number === dataReminder.day) {
					if (isUndefined(newReminder.id)) {
						newReminder.id = newMonth[payload.reminder.day - 1].reminders.length; 
						newMonth[payload.reminder.day - 1].reminders.push(newReminder);
					} else {
						newMonth[payload.reminder.day - 1].reminders[newReminder.id] = newReminder;
					}

					break;
				}
			}

			return {
				...state,
				month: newMonth,
				showList: false
			}

		case types.DELETE_REMINDER:
			const monthReminders: Array<IDay> = [...state.month];
			
			for (const day of monthReminders) {
				if(day.number === payload.day) {
					remove(day.reminders, reminder => reminder.id === payload.id);
					break;
				}
			}

			return {
				...state,
				showList: false,
				month: monthReminders
			}

		case types.DELETE_REMINDERS:
			const newMonthReminders: Array<IDay> = [...state.month];
			
			for (const day of newMonthReminders) {
				if(day.number === payload.day) {
					day.reminders = [];
					break;
				}
			}

			return {
				...state,
				month: newMonthReminders
			}

		default:
			return state;
	}
};
