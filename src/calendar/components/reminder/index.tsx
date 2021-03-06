import React from 'react';
import { useDispatch } from 'react-redux';
import { isEmpty, isUndefined } from 'lodash';
import { deleteReminder } from '../../../actions/calendar';
import { setReminderInput, saveReminder, closeReminder } from '../../../actions/reminder';

interface IReminder {
    show: boolean,
    reminder: {
        id: number,
        title: string,
        description: string,
        day: number,
        hour: string,
        backgroundColor: string
    }
};

const Reminder = ({ reminder, show } : IReminder) => {

    const dispatch = useDispatch();
    const colors = ["#363636", "#3273dc", "#48c774", "#ffd325", "#f14668"];

    return (
        <div className={"modal " + (show ? 'is-active' : '')}>
            <div className={"modal-background"}></div>
            <div className={"modal-card"}>
                <header className={"modal-card-head"}>
                    <p className={"modal-card-title"}>Reminder</p>
                    <button className={"delete"} aria-label="close" onClick={() => dispatch(closeReminder())}></button>
                </header>
                <section className={"modal-card-body"}>
                    <div className={"field"}>
                        <label className={"label"}>Title <span>*</span></label>
                        <div className={"control"}>
                            <input className={"input"} type="text" maxLength={30} placeholder="Title" value={reminder?.title} onChange={(e) => dispatch(setReminderInput(e.target.value, 'title'))} />
                        </div>
                    </div>
                    <div className={"field"}>
                        <label className={"label"}>Hour <span>*</span></label>
                        <div className={"control"}>
                            <input className={"input"} type="time" value={reminder?.hour} onChange={(e) => dispatch(setReminderInput(e.target.value, 'hour'))} />
                        </div>
                    </div>
                    <div className={"field"}>
                        <label className={"label"}>Description</label>
                        <div className={"control"}>
                            <textarea className={"textarea"} maxLength={150} placeholder="Description" value={reminder?.description} onChange={(e) => dispatch(setReminderInput(e.target.value, 'description'))}></textarea>
                        </div>
                    </div>
                    <div className={"field"}>
                        <label className={"label"}>Background color</label>
                        <div className={"control"}>
                            {colors.map(color => (
                                <div key={color} onClick={() => dispatch(setReminderInput(color, "backgroundColor"))} className={"input-color " + (reminder?.backgroundColor === color ? "selected" : "")} style={{backgroundColor: color}}></div>
                            ))}
                        </div>
                    </div>
                </section>
                <footer className={"modal-card-foot"}>
                    <button className={"button is-success"} onClick={() => dispatch(saveReminder(reminder))} disabled={isEmpty(reminder?.title) || isEmpty(reminder?.hour)}>Save reminder</button>
                    {!isUndefined(reminder.id) ? <button className={"button is-danger"} onClick={() => dispatch(deleteReminder(reminder.day, reminder.id))}>Delete reminder</button> : ''}
                    <button className={"button"} onClick={() => dispatch(closeReminder())}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export default Reminder;
