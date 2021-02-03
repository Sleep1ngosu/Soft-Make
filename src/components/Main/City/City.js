import React from 'react'
import './City.scss'
import RemoveCity from './RemoveCity/RemoveCity'
import TempertureList from './TempertureList/TempertureList'

// title, time, cur_temp, date, tempertures

const City = (props) => {
	const tempertures = [
		props.morning_temp,
		props.daytime_temp,
		props.evening_temp,
	]

	return (
		<div className="city__wrapper">
			<div className="city">
				<div className="city__header">
					<span title={props.title} className="city__header__text">
						{props.title}
					</span>
					<RemoveCity id={props.id} />
				</div>
				<div className="city__body">
					<div className="city__body__left">
						<div className="city__body__left__time">
							UTC {props.time}
						</div>
						<div className="city__body__left__temperture">
							{props.cur_temp}°
						</div>
					</div>
					<div className="city__body__right">
						<div className="city__body__right__date">
							{props.date}
						</div>
						<TempertureList tempertures={tempertures} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default City
