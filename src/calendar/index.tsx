import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { setMonth, openList } from '../actions/calendar';
import { openReminder } from '../actions/reminder';
import Header from './components/header';
import Cells from './components/cells';
import Reminder from './components/reminder';
import List from './components/list';

const Calendar = ({ cells, month, showList, selectedDay, reminder } : any) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMonth(moment().month() + 1, moment().year()))
	}, []);

	return (
		<>
			<Header />
			<Cells month={cells} openList={(day: number) => dispatch(openList(day))} openReminder={(day: number) => dispatch(openReminder(day))} />
			<Reminder reminder={reminder} />
			<List show={showList} day={month[selectedDay - 1]} />
		</>
	)
}

export default Calendar;
