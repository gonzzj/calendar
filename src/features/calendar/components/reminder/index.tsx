import React, { useState } from 'react';

interface IReminder {
    show: boolean
};

const Reminder = ({ show } : IReminder) =>  {

    const [toggle, toggleModal] = useState(show);

    return (
        <div className={"modal " + (toggle && 'is-active')}>
            <div className={"modal-background"}></div>
            <div className={"modal-card"}>
                <header className={"modal-card-head"}>
                    <p className={"modal-card-title"}>Add Reminder</p>
                    <button className={"delete"} aria-label="close" onClick={() => toggleModal(!toggle)}></button>
                </header>
                <section className={"modal-card-body"}>
                   
                </section>
                <footer className={"modal-card-foot"}>
                    <button className={"button is-success"} onClick={() => toggleModal(!toggle)}>Save reminder</button>
                    <button className={"button"} onClick={() => toggleModal(!toggle)}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export default Reminder;
