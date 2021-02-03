import { ADD_LOCATION, REMOVE_LOCATION, LOAD_LOCATIONS } from '../actions/types'

const initialState = {
	locations: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_LOCATION: {
			let newLocations = state.locations
			newLocations.push(action.payload)
			localStorage.setItem('locations', JSON.stringify(newLocations))
			return {
				...state,
				locations: newLocations,
			}
		}
		case REMOVE_LOCATION: {
			const newLocations = state.locations.filter(
				(e) => action.payload !== e.id
			)
			if (newLocations.length) {
				localStorage.setItem('locations', JSON.stringify(newLocations))
			} else {
				localStorage.removeItem('locations')
			}
			return {
				...state,
				locations: newLocations,
			}
		}
		case LOAD_LOCATIONS: {
			const loadedLocations = JSON.parse(
				localStorage.getItem('locations')
			)
			return {
				...state,
				locations: loadedLocations || [],
			}
		}
		default:
			return state
	}
}
