import React from 'react';
import moment from 'moment';

const Header = () => {

    const week: Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <>
            <h1 className={"is-size-3 has-text-centered mb-4"}>{moment().format('MMMM')}</h1>
            <div className={"columns is-gapless mb-0"}>
                {week.map((day: string) => (
                    <div className={"column calendar-column calendar-header"} key={day}>
                        {day}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Header;
