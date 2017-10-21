import {
	GET_POSTS,
	GET_POSTS_OF_CATEGORY
} from './types';

import {
	getPostsAPI,
	getPostsOfCategoryAPI
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

export const getPostsOfCategory = (category) => async dispatch => {
	try {
		const posts = await getPostsOfCategoryAPI(category);
		dispatch({
			type: GET_POSTS_OF_CATEGORY,
			payload: posts
		})
	} catch (e) {
		console.log(e);
	} finally {

	}
}
