import React from 'react'
import './Blocker.scss'
import { connect } from 'react-redux'

const Blocker = (props) => {
	const style = (props.isShow && { display: 'block' }) || { display: 'none' }

	return <div style={style} className="blocker"></div>
}

const mapStateToProps = (state) => {
	return {
		isShow: state.popup.isShow,
	}
}

export default connect(mapStateToProps, null)(Blocker)
