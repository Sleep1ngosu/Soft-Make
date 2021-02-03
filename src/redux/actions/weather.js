import {
	ADD_LOCATION,
	REMOVE_LOCATION,
	LOAD_LOCATIONS,
	SET_ERROR,
	REMOVE_ERROR,
} from './types'
import axios from '../../utils/axios'
import { generateData } from '../../helpers/generateData'
import weather from '../reducers/weather'

export const addLocation = (location) => (dispatch) => {
	dispatch({ type: ADD_LOCATION, payload: location })
}

export const removeLocation = (id) => (dispatch) => {
	dispatch({ type: REMOVE_LOCATION, payload: id })
}

export const loadingLocations = () => (dispatch) => {
	const loadedLocations = JSON.parse(localStorage.getItem('locations'))
	if (loadedLocations) {
		loadedLocations.forEach((e) => {
			dispatch(requestLocation(e.location))
		})
	}
}

export const requestLocation = (query) => async (dispatch) => {
	try {
		const URI = `/weather.ashx?key=1e152b5fb38d4dd298e115328212901&q=${query}&format=json`
		const response = await axios.get(URI)
		if (response.data.data.error) {
			dispatch({
				type: SET_ERROR,
				payload: response.data.data.error[0].msg,
			})
			setTimeout(() => {
				dispatch({ type: REMOVE_ERROR })
			}, 10000)
		} else {
			const res = response.data.data
			const data = generateData(res)
			dispatch(addLocation(data))
		}
	} catch (error) {
		console.log(error)
	}
}

export const requestCurrentLocation = (ip) => async (dispatch) => {
	try {
		const SEARCH_URI = `/search.ashx?key=1e152b5fb38d4dd298e115328212901&q=${ip}&format=json`
		const search_response = await axios.get(SEARCH_URI)
		const location =
			search_response.data.search_api.result[0].areaName[0].value
		const WEATHER_URI = `/weather.ashx?key=1e152b5fb38d4dd298e115328212901&q=${location}&format=json`
		const weather_response = await axios.get(WEATHER_URI)
		const res = weather_response.data.data
		const data = generateData(res)
		dispatch(addLocation(data))
	} catch (error) {
		console.log(error)
	}
}
