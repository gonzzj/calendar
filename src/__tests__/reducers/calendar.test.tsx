import reducer from '../../reducers/calendar';
import * as _ from '../../reducers/calendar';
import calendarState from '../../mocks/calendar';
import expectedCalendarState from '../../mocks/calendar';

describe('>>> Reducers: Calendar', () => {
	test('+++ Should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			month: [],
			showList: false,
		});
	});

	test('+++ Should handle SAVE_REMINDER', () => {
		expect(
			reducer(calendarState, {
				type: 'SAVE_REMINDER',
				payload: {
					reminder: {
						id: 0,
						hour: '16:00',
						title: 'Text',
						description: 'Lorem ipsum',
						backgroundColor: "#3273dc",
						day: 25
					}
				}
			})
		).toEqual(expectedCalendarState);
	});
});
