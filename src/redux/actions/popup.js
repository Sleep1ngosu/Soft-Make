import { SHOW_POPUP, HIDE_POPUP } from './types'

export const showPopup = () => (dispatch) => {
	dispatch({ type: SHOW_POPUP })
}

export const hidePopup = () => (dispatch) => {
	dispatch({ type: HIDE_POPUP })
}
