import React from 'react';
import { isEmpty } from 'lodash';

interface ICells {
    month: Array<string>,
    onClick: Function
};

const Cells = ({ month, onClick } : ICells) => (
    <div className={"columns is-gapless is-multiline"}>
        {month.map((day: any, indexDay: number) => (
            <div className={"column calendar-cell calendar-column " + (!isEmpty(day) && "calendar-day")} key={indexDay} onClick={() => onClick(day.number, day.number)}>
                <strong>{day.number}</strong>
                {day.reminders.map((reminder: any, indexReminder: number) => {
                    if (indexReminder === 2) {
                        return <span>...</span>
                    } else if (indexReminder > 2) {
                        return <></>;
                    }

                    return <span className={"tag is-warning"} key={indexReminder}>{reminder.title}</span>;
                })}
            </div>
        ))}
    </div>
);

export default Cells;
