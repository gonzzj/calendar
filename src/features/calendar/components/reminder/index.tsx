import React from 'react';
import { useDispatch } from 'react-redux';
import { setReminderInput, saveReminder, closeReminder } from '../../../../actions/reminder';

interface IReminder {
    show: boolean,
    title: string,
    description: string,
    day: number,
    hour: Date
};

const Reminder = ({ show, day, hour, title, description } : IReminder) =>  {

    const dispatch = useDispatch();

    return (
        <div className={"modal " + (show && 'is-active')}>
            <div className={"modal-background"}></div>
            <div className={"modal-card"}>
                <header className={"modal-card-head"}>
                    <p className={"modal-card-title"}>Add Reminder</p>
                    <button className={"delete"} aria-label="close" onClick={() => dispatch(closeReminder())}></button>
                </header>
                <section className={"modal-card-body"}>
                    <div className={"field"}>
                        <label className={"label"}>Title</label>
                        <div className={"control"}>
                            <input className={"input"} type="text" maxLength={30} placeholder="Title" value={title} onChange={(e) => dispatch(setReminderInput(e.target.value, 'title'))} />
                        </div>
                    </div>
                    <div className={"field"}>
                        <label className={"label"}>Hour</label>
                        <div className={"control"}>
                            <input type="time" />
                        </div>
                    </div>
                    <div className={"field"}>
                        <label className={"label"}>Description</label>
                        <div className={"control"}>
                            <textarea className={"textarea"} maxLength={150} placeholder="Description" value={description} onChange={(e) => dispatch(setReminderInput(e.target.value, 'description'))}></textarea>
                        </div>
                    </div>
                    <div className={"field"}>
                        <label className={"label"}>Background color</label>
                        <div className={"control"}>
                        </div>
                    </div>
                </section>
                <footer className={"modal-card-foot"}>
                    <button className={"button is-success"} onClick={() => dispatch(saveReminder(day, hour, title, description))}>Save reminder</button>
                    <button className={"button"} onClick={() => dispatch(closeReminder())}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export default Reminder;
