import * as _ from '../../actions/calendar';

describe('>>> Actions: Calendar', () => {
	test('+++ Should create an action to set the actual month', () => {
        const month = 8;
        const year = 2020;
        const expectedAction = {
            type: 'SET_MONTH',
            payload: {
                year: year,
                month: month
            }
        };

        expect(_.setMonth(month, year)).toEqual(expectedAction);
    });

    test('+++ Should create an action to open the quickview list', () => {
        const day = 4;
        const expectedAction = {
            type: 'OPEN_LIST',
            payload: {
                day: day
            }
        };

        expect(_.openList(day)).toEqual(expectedAction);
    });

    test('+++ Should create an action to close the quickview list', () => {
        const expectedAction = {
            type: 'CLOSE_LIST'
        };

        expect(_.closeList()).toEqual(expectedAction);
    });

    test('+++ Should create an action to delete one reminder', () => {
        const day = 4;
        const id = 1;
        const expectedAction = {
            type: 'DELETE_REMINDER',
            payload: {
                day: day,
                id: id
            }
        };

        expect(_.deleteReminder(day, id)).toEqual(expectedAction);
    });

    test('+++ Should create an action to delete every reminder', () => {
        const day = 4;
        const expectedAction = {
            type: 'DELETE_REMINDERS',
            payload: {
                day: day
            }
        };

        expect(_.deleteReminders(day)).toEqual(expectedAction);
    });
});