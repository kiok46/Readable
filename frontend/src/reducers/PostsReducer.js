import {
	GET_POSTS,
	GET_POSTS_OF_CATEGORY
} from '../actions/types';

export const INITIAL_STATE = {
	posts: []
}

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {...state, posts: action.payload}
		case GET_POSTS_OF_CATEGORY:
		    return {...state, posts: action.payload}
		default:
			return state
	}
}
