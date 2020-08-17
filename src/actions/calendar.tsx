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