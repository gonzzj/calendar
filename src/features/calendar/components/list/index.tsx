import React from 'react';
import { useDispatch } from 'react-redux';
import { closeList } from '../../../../actions/calendar';

interface IList {
    show: boolean,
    day: Object
}

const List = ({ show, day } : IList) => {

    const dispatch = useDispatch();

    return (
        <div className={"quickview " + (show ? "is-active" : "")}>
            <header className={"quickview-header"}>
                <p className={"title"}>Quickview title</p>
                <span className={"delete"} data-dismiss="quickview" onClick={() => dispatch(closeList())}></span>
            </header>
            <div className={"quickview-body"}>
                <div className={"quickview-block"}>
                    ...
                </div>
            </div>
            <footer className={"quickview-footer"}>

            </footer>
        </div>
    )
}

export default List;
