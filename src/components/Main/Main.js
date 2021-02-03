import React, { useState, useEffect, useCallback } from 'react'
import './Main.scss'
import { connect } from 'react-redux'
import Input from './Input/Input'
import Button from './Button/Button'
import City from './City/City'
import { requestLocation } from '../../redux/actions/weather'

const Main = (props) => {
	const [data, setData] = useState('')

	const onChange = (e) => {
		setData(e.target.value)
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		await props.requestLocation(data)
	}

	const cityList = props.weather.locations.map((e, i) => {
		return (
			<City
				id={e.id}
				key={e.id}
				title={e.location}
				cur_temp={e.cur_temp}
				date={e.date}
				time={e.time}
				morning_temp={e.morning_temp}
				daytime_temp={e.daytime_temp}
				evening_temp={e.evening_temp}
			/>
		)
	})
	// console.log(props.weather)

	return (
		<main className="main__wrapper">
			<form onSubmit={(e) => onSubmit(e)} className="main__header">
				<Input
					value={data}
					onChange={(e) => onChange(e)}
					placeholder="Choose city or country..."
				/>
				<Button type="submit" />
			</form>
			<div className="main__body">{cityList}</div>
		</main>
	)
}

const mapStateToProps = (state) => {
	return {
		weather: state.weather,
	}
}

export default connect(mapStateToProps, { requestLocation })(Main)
