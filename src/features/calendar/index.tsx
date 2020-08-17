import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { setMonth } from '../../actions/calendar';
import { openReminder } from '../../actions/reminder';
import Header from './components/header';
import Cells from './components/cells';
import Reminder from './components/reminder';

const Calendar = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMonth(8, 2020))
	}, [dispatch]);
	
	const { month, reminder } = useSelector(state => ({
		month: get(state, 'calendar.month'),
		reminder: get(state, 'reminder')
	}));

	return (
		<>
			<Header />
			<Cells month={month} onClick={(day: number, hour: Date) => dispatch(openReminder(day, hour))} />
			<Reminder show={reminder.show} title={reminder.title} description={reminder.description} day={reminder.day} hour={reminder.hour} />
		</>
	)
}

export default Calendar;
