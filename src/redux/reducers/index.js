import { combineReducers } from 'redux'
import weather from './weather'
import error from './error'
import popup from './popup'
import user from './user'

export default combineReducers({
	weather,
	error,
	popup,
	user,
})
