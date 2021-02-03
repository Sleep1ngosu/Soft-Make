import React from 'react'
import './Input.scss'

const Input = (props) => {
	return (
		<div className="main__header__input__wrapper">
			<input
				placeholder={props.placeholder}
				className="main__header__input"
			></input>
		</div>
	)
}

export default Input
