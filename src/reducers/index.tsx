import { combineReducers } from 'redux';
import calendar from './calendar';
import reminder from './reminder';

const stores = {
    calendar,
    reminder
};

export default combineReducers(stores);
