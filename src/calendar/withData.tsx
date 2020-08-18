import { connect } from 'react-redux';
import { get, isEmpty } from 'lodash';
import moment from 'moment';
import Calendar from './';

const mapStateToProps = (state: any) => {
	const {
        calendar,
        reminder
	} = state;
    
    const cells = [...calendar.month];

    if (!isEmpty(calendar.month)) {
        for (let index = 0; index < moment().date(1).day(); index++) {
            cells.unshift({});
        }
        
        const tableTotal: number = 7 - cells.length % 7;

        for (let index = 0; index < tableTotal; index++) {
            cells.push({});
        }
    }

	return {
        month: get(calendar, 'month'),
		showList: get(calendar, 'showList'),
        selectedDay: get(calendar, 'selectedDay'),
        cells,
		reminder
	};
};

export default connect(
	mapStateToProps
)(Calendar);