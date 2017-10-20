import {
	GET_CATEGORIES
} from './types';

import {
	getCategoriesAPI
} from '../utils/api';


export const getCategories = () => async dispatch => {
	try {
		const categories = await getCategoriesAPI();
		dispatch({
			type: GET_CATEGORIES,
			payload: categories
		})
	} catch (e) {
		console.log(e);
	} finally {

	}
}
