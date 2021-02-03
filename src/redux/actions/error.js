import { SET_ERROR, REMOVE_ERROR } from './types'

export const setError = (message) => (dispatch) => {
	dispatch({ type: SET_ERROR, payload: message })
}

export const removeError = () => (dispatch) => {
	dispatch({ type: REMOVE_ERROR })
}
