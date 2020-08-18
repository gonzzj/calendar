import reducer from '../../reducers/reminder';
import * as _ from '../../reducers/reminder';

describe('>>> Reducers: Reminder', () => {
	const initialState = {
		show: false,
		data: {
			title: '',
			hour: '',
			description: '',
			backgroundColor: ''
		}
	};

	test('+++ Should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	test('+++ Should handle OPEN_REMINDER', () => {
		expect(
			reducer(initialState, {
				type: 'OPEN_REMINDER',
				payload: {
					day: 4
				}
			})
		).toEqual({
			show: true,
			data: {
				day: 4
			}
		});
	});

	test('+++ Should handle EDIT_REMINDER', () => {
		expect(
			reducer(initialState, {
				type: 'EDIT_REMINDER',
				payload: {
					day: 4,
					reminder: {
						id: 2,
						title: 'text',
						hour: '16:00',
						description: 'lorem ipsum',
						backgroundColor: '#fff'
					}
				}
			})
		).toEqual({
			show: true,
			data: {
				day: 4,
				id: 2,
				title: 'text',
				hour: '16:00',
				description: 'lorem ipsum',
				backgroundColor: '#fff'
			}
		});
	});

	test('+++ Should handle SET_REMINDER_INPUT', () => {
		expect(
			reducer(initialState, {
				type: 'SET_REMINDER_INPUT',
				payload: {
					value: '18:00',
					key: 'hour'
				}
			})
		).toEqual({
			show: false,
			data: {
				title: '',
				hour: '18:00',
				description: '',
				backgroundColor: ''
			}
		});
	});
});
