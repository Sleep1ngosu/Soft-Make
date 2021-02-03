import { SET_IP } from './types'

export const setIp = (ip) => (dispatch) => {
	dispatch({ type: SET_IP, payload: ip })
}
