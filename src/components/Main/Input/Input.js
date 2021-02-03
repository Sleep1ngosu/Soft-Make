import React from 'react'
import './Input.scss'

const Input = (props) => {
	return (
		<div className="main__header__input__wrapper">
			<input
				placeholder={props.placeholder}
				className="main__header__input"
				value={props.value}
				onChange={props.onChange}
				// autoComplete={false}
				required
			/>
		</div>
	)
}

export default Input
