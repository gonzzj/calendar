import React from 'react';
import { isEmpty, sortBy, map } from 'lodash';
import { IDay, IReminder } from '../../../types/types';

interface ICells {
    month: Array<IDay>,
    openList: Function,
    openReminder: Function
};

const Cells = ({ month, openList, openReminder } : ICells) => {
    return (
        <div className={"columns is-gapless is-multiline"}>
            {map(month, (day: IDay, indexDay: number) => (
                <div 
                    className={"column calendar-cell calendar-column " + (!isEmpty(day) ? "calendar-day" : "")} 
                    key={indexDay} 
                    onClick={() => !isEmpty(day) && (isEmpty(day.reminders) ? openReminder(day.number) : openList(day.number))}
                >
                    <strong>{day.number}</strong>
                    {sortBy(day.reminders, ['hour']).map((reminder: IReminder, indexReminder: number) => {
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
