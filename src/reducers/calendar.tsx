import * as types from '../actions/types';

const initialState = {
	month: []
};

export default (state = initialState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case types.SET_MONTH:
			const monthIndex = payload.month - 1;
			const date = new Date(payload.year, monthIndex, 1);
			const result = [];

			while (date.getMonth() === monthIndex) {
				result.push({
					number: date.getDate()
				});
				
				date.setDate(date.getDate() + 1);
			}

			return {
				...state,
				month: result,
            };

		default:
			return state;
	}
};
