import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { IDay, IReminder } from '../types/types';
import { setMonth, openList } from '../actions/calendar';
import { openReminder } from '../actions/reminder';
import Header from './components/header';
import Cells from './components/cells';
import Reminder from './components/reminder';
import List from './components/list';

interface ICalendar {
	cells: Array<IDay>
	month: Array<IDay>
	showList: boolean
	selectedDay: number
	reminder: {
		show: boolean,
		data: IReminder
	}
}

const Calendar = ({ cells, month, showList, selectedDay, reminder } : ICalendar) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMonth(moment().month() + 1, moment().year()));
	}, []);

	return (
		<>
			<Header />
			<Cells month={cells} openList={(day: number) => dispatch(openList(day))} openReminder={(day: number) => dispatch(openReminder(day))} />
			<Reminder reminder={reminder?.data} show={reminder.show} />
			<List show={showList} day={month[selectedDay - 1]} />
		</>
	)
}

export default Calendar;
