import { SHOW_POPUP, HIDE_POPUP } from '../actions/types'

const initialState = {
	isShow: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_POPUP: {
			return {
				isShow: true,
			}
		}
		case HIDE_POPUP: {
			return {
				isShow: false,
			}
		}
		default:
			return state
	}
}
