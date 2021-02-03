import React from 'react'
import './Button.scss'
import plus from '../../../assets/icons/plus.png'

const Button = (props) => {
	return (
		<button type={props.type} className="main__header__button">
			<img
				className="main__header__button__icon"
				src={plus}
				alt="plus icon"
			/>
		</button>
	)
}

export default Button
