import React from 'react'
import './RemoveCity.scss'
import remove from '../../../../assets/icons/remove.png'

const RemoveCity = () => {
	return (
		<div className="city__removeCity">
			<img
				className="city__removeCity__icon"
				src={remove}
				alt="remove icon"
			></img>
		</div>
	)
}

export default RemoveCity
