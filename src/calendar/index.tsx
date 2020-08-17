import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { setMonth, openList } from '../actions/calendar';
import { openReminder } from '../actions/reminder';
import Header from './components/header';
import Cells from './components/cells';
import Reminder from './components/reminder';
import List from './components/list';

const Calendar = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMonth(8, 2020))
	}, [dispatch]);
	
	const { month, showList, selectedDay, reminder } = useSelector(state => ({
		month: get(state, 'calendar.month'),
		showList: get(state, 'calendar.showList'),
		selectedDay: get(state, 'calendar.selectedDay'),
		reminder: get(state, 'reminder')
	}));

	return (
		<>
			<Header />
			<Cells month={month} openList={(day: number) => dispatch(openList(day))} openReminder={(day: number) => dispatch(openReminder(day))} />
			<Reminder reminder={reminder} />
			<List show={showList} day={month[selectedDay - 1]} />
		</>
	)
}

export default Calendar;
