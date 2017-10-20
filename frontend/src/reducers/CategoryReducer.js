import {
	GET_CATEGORIES
} from '../actions/types';

export const INITIAL_STATE = {
	categories: []
}

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return {...state, categories: action.payload}
		default:
			return state
	}
}
