import { ADD_LOCATION, REMOVE_LOCATION } from '../actions/types'

const initialState = {
	locations: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_LOCATION: {
			let newLocations = state.locations
			newLocations.push(action.payload)
			// console.log(action.payload)
			return {
				...state,
				locations: newLocations,
			}
		}
		case REMOVE_LOCATION: {
			const newLocations = state.locations.filter(
				(e) => action.payload !== e.id
			)
			return {
				...state,
				locations: newLocations,
			}
		}
		default:
			return state
	}
}
