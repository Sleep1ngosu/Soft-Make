import React from 'react'
import './Button.scss'
import plus from '../../../assets/icons/plus.png'
// import loading from '../../../assets/gifs/loading.gif'
// import { css } from '@emotion/core'
// import ClipLoader from 'react-spinners/ClipLoader'

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
