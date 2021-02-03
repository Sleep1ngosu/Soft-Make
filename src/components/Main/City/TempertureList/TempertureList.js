import React from 'react'
import TempertureBlock from './TempertureBlock/TempertureBlock'

const TempertureList = (props) => {
	const daytimes = ['Morning:', 'Daytime:', 'Evening:']

	let tmpList = null

	if (props.tempertures) {
		tmpList = props.tempertures.map((e, i) => {
			return (
				<TempertureBlock key={i} daytime={daytimes[i]} temperture={e} />
			)
		})
	}

	return tmpList
}

export default TempertureList
