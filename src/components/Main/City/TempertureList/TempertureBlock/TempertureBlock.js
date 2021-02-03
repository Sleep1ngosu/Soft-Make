import React from 'react'
import './TempertureBlock.scss'

const TempertureBlock = (props) => {
	return (
		<div className="city__tempertureBlock">
			<div className="city__tempertureBlock__daytime">
				{props.daytime}
			</div>
			<div className="city__tempertureBlock__temperture">
				{props.temperture}°
			</div>
		</div>
	)
}

export default TempertureBlock
