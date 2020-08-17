import * as types from '../actions/types';

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
			const newMonth: Array<any> = [...state.month];
			const newReminder = {
				hour: payload.hour,
				title: payload.title,
				description: payload.description,
				backgroundColor: payload.backgroundColor
			};

			for (const day of newMonth) {
				if(day.number === payload.day) {
					newMonth[payload.day - 1].reminders.push(newReminder);
					break;
				}
			}

			return {
				...state,
				month: newMonth
			}

		case types.DELETE_REMINDERS:
			const newMonthReminders: Array<any> = [...state.month];
			
			for (const day of newMonthReminders) {
				if(day.number === payload.day) {
					newMonthReminders[payload.day - 1].reminders = [];
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
