import React from 'react'
import './City.scss'
import RemoveCity from './RemoveCity/RemoveCity'
import TempertureList from './TempertureList/TempertureList'

const City = (props) => {
	const tempertures = ['3', '25', '-14']

	return (
		<div className="city__wrapper">
			<div className="city">
				<div className="city__header">
					<span title={props.title} className="city__header__text">
						Minsk, Belarus
					</span>
					<RemoveCity />
				</div>
				<div className="city__body">
					<div className="city__body__left">
						<div className="city__body__left__time">15:38</div>
						<div className="city__body__left__temperture">-5°</div>
					</div>
					<div className="city__body__right">
						<div className="city__body__right__date">
							02/10/2021
						</div>
						<TempertureList tempertures={tempertures} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default City
