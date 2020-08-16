import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { setMonth } from '../../actions/calendar';
import Header from './components/header';
import Cells from './components/cells';
import Reminder from './components/reminder';

const Calendar = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMonth(8, 2020))
    }, [dispatch]);
    
    const { month } = useSelector(state => ({
		month: get(state, 'calendar.month')
    }));

    return (
        <>
            <Header />
            <Cells month={month} />
			<Reminder show={true} />
        </>
    )
}

export default Calendar;
