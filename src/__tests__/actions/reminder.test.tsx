import * as _ from '../../actions/reminder';

describe('>>> Actions: Reminder', () => {
	test('+++ Should create an action to open the modal reminder', () => {
        const day = 8;
        const expectedAction = {
            type: 'OPEN_REMINDER',
            payload: {
                day: day
            }
        };

        expect(_.openReminder(day)).toEqual(expectedAction);
    });

    test('+++ Should create an action to edit one reminder', () => {
        const day = 4;
        const reminder = {
            title: 'text',
            hour: '16:00',
            day: 4
        };
        const expectedAction = {
            type: 'EDIT_REMINDER',
            payload: {
                reminder: reminder,
                day: day
            }
        };

        expect(_.editReminder(reminder, day)).toEqual(expectedAction);
    });

    test('+++ Should create an action to set an input reminder', () => {
        const value = "16:00";
        const key = "hour";
        const expectedAction = {
            type: 'SET_REMINDER_INPUT',
            payload: {
                value: value,
                key: key
            }
        };

        expect(_.setReminderInput(value, key)).toEqual(expectedAction);
    });

    test('+++ Should create an action to save one reminder', () => {
        const reminder = {
            title: 'text',
            hour: '16:00',
            day: 4
        };
        const expectedAction = {
            type: 'SAVE_REMINDER',
            payload: {
                reminder: reminder
            }
        };

        expect(_.saveReminder(reminder)).toEqual(expectedAction);
    });

    test('+++ Should create an action to close the modal reminder', () => {
        const expectedAction = {
            type: 'CLOSE_REMINDER'
        };

        expect(_.closeReminder()).toEqual(expectedAction);
    });
});