import React from 'react';
import { isEmpty } from 'lodash';

interface ICells {
    month: Array<string>
};

const Cells = ({month} : ICells) => (
    <div className={"columns is-gapless is-multiline"}>
        {month.map((day: any, index: number) => (
            <div className={"column calendar-cell calendar-column " + (!isEmpty(day) && "calendar-day")} key={index} onClick={() => console.log("asdas")}>
                <span>{day.number}</span>
            </div>
        ))}
    </div>
);

export default Cells;
