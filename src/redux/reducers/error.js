import { SET_ERROR, REMOVE_ERROR } from '../actions/types'

const initialState = {
	isShow: false,
	message: '',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR: {
			return {
				...state,
				isShow: true,
				message: action.payload,
			}
		}
		case REMOVE_ERROR: {
			return {
				...state,
				isShow: false,
				message: '',
			}
		}
		default:
			return state
	}
}
