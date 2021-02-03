import { SET_IP } from '../actions/types'

const initialState = {
	ip: '',
	// isFirst: true,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_IP: {
			return {
				...state,
				ip: action.payload,
			}
		}
		// case SET_FIRST: {
		// 	localStorage.setItem('isFirst', true)
		// 	return {
		// 		...state,
		// 		isFirst: false
		// 	}
		// }
		default:
			return state
	}
}
