import React from 'react'
import './Main.scss'
import Input from './Input/Input'
import Button from './Button/Button'
import City from './City/City'

const Main = () => {
	return (
		<main className="main__wrapper">
			<form className="main__header">
				<Input placeholder="Choose city..." />
				<Button type="submit" />
			</form>
			<div className="main__body">
				<City />
				<City />
			</div>
		</main>
	)
}

export default Main
