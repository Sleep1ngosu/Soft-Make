import { ADD_LOCATION, REMOVE_LOCATION } from './types'
import axios from '../../utils/axios'
import uuid from 'react-uuid'

export const addLocation = (location) => async (dispatch) => {
	dispatch({ type: ADD_LOCATION, payload: location })
}

export const removeLocation = (id) => async (dispatch) => {
	dispatch({ type: REMOVE_LOCATION, payload: id })
}

export const requestLocation = (query) => async (dispatch) => {
	try {
		const URI = `/weather.ashx?key=1e152b5fb38d4dd298e115328212901&q=${query}&format=json`
		const response = await axios.get(URI)
		if (response.data.data.error) {
			console.log(response.data.data.error[0].msg)
		} else {
			const res = response.data.data
			const data = {
				id: uuid(),
				location: res.request[0].query,
				time: res.current_condition[0].observation_time,
				cur_temp: res.current_condition[0].temp_C,
				date: res.weather[0].date,
				morning_temp: res.weather[0].hourly[2].tempC,
				daytime_temp: res.weather[0].hourly[4].tempC,
				evening_temp: res.weather[0].hourly[6].tempC,
			}
			dispatch(addLocation(data))
			return data
		}
	} catch (error) {
		console.log(error)
	}
}
