import {
	GET_POSTS
} from './types';

import {
	getPostsAPI
} from '../utils/api';


export const getPosts = () => async dispatch => {
	try {
		const posts = await getPostsAPI();
		dispatch({
			type: GET_POSTS,
			payload: posts
		})
	} catch (e) {
		console.log(e);
	} finally {

	}
}
