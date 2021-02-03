import uuid from 'react-uuid'

export const generateData = (res) => {
	return {
		id: uuid(),
		location: res.request[0].query,
		time: res.current_condition[0].observation_time,
		cur_temp: res.current_condition[0].temp_C,
		date: res.weather[0].date,
		morning_temp: res.weather[0].hourly[2].tempC,
		daytime_temp: res.weather[0].hourly[4].tempC,
		evening_temp: res.weather[0].hourly[6].tempC,
	}
}
