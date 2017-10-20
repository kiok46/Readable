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

export const getPostsOfCategoryAPI = async (category) => {
	try {
		const response = await axios.get(`http://localhost:3001/${category}/posts`, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

export const getIndividualPostAPI = async (postID) => {
	try {
		const response = await axios.get(`http://localhost:3001/posts/${postID}`, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

export const getCommentsOfPostAPI = async (postID) => {
	try {
		const response = await axios.get(`http://localhost:3001/posts/${postID}/comments`, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

export const getIndividualCommentAPI = async (commentID) => {
	try {
		const response = await axios.get(`http://localhost:3001/comments/${commentID}`, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

/*
POST Methods
*/


/*
data:
    id,
	timestamp,
	title,
	author,
	body,
	category,
	voteScore ->: 0,
	deleted ->: false
*/
export const addNewPostAPI = async (data) => {
	try {
		const response = await axios.post('http://localhost:3001/posts', data, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

/*
option: 'downVote'
*/
export const downVotePostAPI = async (postId) => {
	try {
		const response = await axios.post(`http://localhost:3001/posts/${postId}`, {option: 'downVote'}, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

/*
option: 'upVote'
*/
export const upVotePostAPI = async (postId) => {
	try {
		const response = await axios.post(`http://localhost:3001/posts/${postId}`, {option: 'upVote'}, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

/*
data:
    id,
	timestamp,
	parentId,
	author,
	body,
	voteScore ->: 0,
*/
export const addCommentAPI = async (data) => {
	try {
		const response = await axios.post('http://localhost:3001/comments', data, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

/*
option: 'downVote'
*/
export const downVoteCommentAPI = async (commentID) => {

	try {
		const response = await axios.post(`http://localhost:3001/comments/${commentID}`, {option: 'downVote'}, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

/*
option: 'upVote'
*/
export const upVoteCommentAPI = async (commentID) => {
	try {
		const response = await axios.post(`http://localhost:3001/comments/${commentID}`, {option: 'upVote'}, getAuthHeaders())
		return response.data
	} catch (e) {
		console.log(e);
	}
}

/*
PUT Methods
*/

export const editCommentAPI = async (data) => {
  const { id, timestamp, body } = data;
  const options = {
      timestamp: timestamp,
      body: body
  }
  try {
    const response = await axios.put(`http://localhost:3001/comments/${id}`, options, getAuthHeaders())
    return response.data
  }
  catch (e) {
    console.error(e)
  }
}

export const editPostsAPI = async (data) => {
  const { id, title, body } = data;
  const options = {
      title,
	  body
  }
  try {
    const response = await axios.put(`http://localhost:3001/posts/${id}`, options, getAuthHeaders())
    return response.data
  }
  catch (e) {
    console.error(e)
  }
}



/*
DELETE Methods
*/


export const deleteCommentAPI = async (commentId) => {
  try {
    const response = await axios.delete(`http://localhost:3001/comments/${commentId}`, getAuthHeaders())
    return response.json()
  }
  catch (err) {
    console.error(err)
  }
}

export const deletePostAPI = async (postId) => {
  try {
    const response = await axios.delete(`http://localhost:3001/posts/${postId}`, getAuthHeaders())
    return response.json()
  }
  catch (err) {
    console.error(err)
  }
}
