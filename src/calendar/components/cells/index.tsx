import React from 'react';
import { isEmpty, sortBy } from 'lodash';

interface ICells {
    month: Array<string>,
    openList: Function,
    openReminder: Function
};

const Cells = ({ month, openList, openReminder } : ICells) => {
    return (
        <div className={"columns is-gapless is-multiline"}>
            {month.map((day: any, indexDay: number) => (
                <div 
                    className={"column calendar-cell calendar-column " + (!isEmpty(day) ? "calendar-day" : "")} 
                    key={indexDay} 
                    onClick={() => !isEmpty(day) && (isEmpty(day.reminders) ? openReminder(day.number) : openList(day.number))}
                >
                    <strong>{day.number}</strong>
                    {sortBy(day.reminders, ['hour']).map((reminder: any, indexReminder: number) => {
                        if (indexReminder === 2) {
                            return <span>...</span>
                        } else if (indexReminder > 2) {
                            return <></>;
                        }

                        return <span className={"tag"} style={{backgroundColor: reminder.backgroundColor, color: "#fff"}} key={indexReminder}>{reminder.hour + " - " + reminder.title}</span>;
                    })}
                </div>
            ))}
        </div>
    )
};

export default Cells;
