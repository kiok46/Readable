import axios from 'axios';

export const getAuthHeaders = () => {
	const headers = {
		"headers":{
			'Authorization': 'Kamehamehaaaaaa'
		}
	}
	return headers
}

/*
GET Methods
*/

export const getCategoriesAPI = async () => {
	try {
		const response = await axios.get('http://localhost:3001/categories', getAuthHeaders())
		return response.data.categories
	} catch (e) {
		console.log(e);
	}
}

export const getPostsAPI = async () => {
	try {
		const response = await axios.get('http://localhost:3001/posts', getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

/*
POST Methods
*/

/*
DELETE Methods
*/
