import React from 'react';
import { useDispatch } from 'react-redux';
import { sortBy } from 'lodash';
import moment from 'moment';
import { IDay, IReminder } from '../../../types/types';
import { closeList, deleteReminders } from '../../../actions/calendar';
import { openReminder, editReminder } from '../../../actions/reminder';

interface IList {
    show: boolean,
    day: IDay
}

const List = ({ show, day } : IList) => {
    
    const dispatch = useDispatch();

    return (
        <div className={"quickview " + (show ? "is-active" : "")}>
            <header className={"quickview-header"}>
                <strong className={"title"}>{moment().format('MMMM') + " " + day?.number}</strong>
                <span className={"delete"} data-dismiss="quickview" onClick={() => dispatch(closeList())}></span>
            </header>
            <div className={"quickview-body my-4"}>
                {sortBy(day?.reminders, ["hour"]).map((reminder: IReminder, index: number) => (
                    <div 
                        key={index} 
                        className={"quickview-block px-4 py-4 mb-4"} 
                        style={{backgroundColor: reminder.backgroundColor, color: "#fff", cursor: "pointer"}}
                        onClick={() => dispatch(editReminder(reminder, day.number))}
                    >
                        {reminder.hour + " - " + reminder.title}
                    </div>
                ))}
            </div>
            <footer className={"quickview-footer"}>
                <button className={"button is-success"} onClick={() => dispatch(openReminder(day?.number))}>Add reminder</button>
                <button className={"button is-danger"} onClick={() => dispatch(deleteReminders(day?.number))}>Delete reminders</button>
            </footer>
        </div>
    )
}

export default List;
