import { 
		CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED
		 } from './constants';

export const setSearchField = (text) => ({//It's in brackets to save us the need to return
		type: CHANGE_SEARCH_FIELD,
		payload: text
});

export const requestRobots = (dispatch) =>{//Reducers for Async requests make use of the dispatch
	dispatch({type: REQUEST_ROBOTS_PENDING})
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())//convert to json
	.then(response => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: response}))
	.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}

