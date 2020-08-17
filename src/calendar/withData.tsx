import { connect } from 'react-redux';
import { get } from 'lodash';
import moment from 'moment';
import Calendar from './';

const mapStateToProps = (state: any) => {
	const {
        calendar,
        reminder
	} = state;

    const cells = [...calendar.month];

    for (let index = 0; index < moment().date(1).day(); index++) {
        cells.unshift({});
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