import React from 'react'
import './RemoveCity.scss'
import { connect } from 'react-redux'
import remove from '../../../../assets/icons/remove.png'
import { removeLocation } from '../../../../redux/actions/weather'

const RemoveCity = (props) => {
	const onRemove = (id) => {
		props.removeLocation(id)
	}

	return (
		<div onClick={() => onRemove(props.id)} className="city__removeCity">
			<img
				className="city__removeCity__icon"
				src={remove}
				alt="remove icon"
			></img>
		</div>
	)
}

export default connect(null, { removeLocation })(RemoveCity)
