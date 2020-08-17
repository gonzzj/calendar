import * as types from './types';

export const setMonth = (month: number, year: number) => {
	return {
		type: types.SET_MONTH,
		payload: {
			year, 
			month
		}
	};
};

export const openList = (day: number) => {
	return {
		type: types.OPEN_LIST,
		payload: {
			day
		}
	}
};

export const closeList = () => {
	return {
		type: types.CLOSE_LIST
	}
};