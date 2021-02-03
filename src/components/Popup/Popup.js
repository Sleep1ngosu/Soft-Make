import React from 'react'
import './Popup.scss'
import { connect } from 'react-redux'
import { hidePopup } from '../../redux/actions/popup'
import { requestCurrentLocation } from '../../redux/actions/weather'

const Popup = ({ isShow, hidePopup, ip, requestCurrentLocation }) => {
	const style = (isShow && { display: 'flex' }) || { display: 'none' }

	const onDecline = () => {
		hidePopup()
	}

	const onAccept = () => {
		requestCurrentLocation(ip)
		hidePopup()
	}

	return (
		<div style={style} className="popup__wrapper">
			<div className="popup__message">
				Do you want to add your location?
			</div>
			<div className="popup__buttons">
				<button
					onClick={onAccept}
					className="popup__buttons__accept popup__button"
				>
					Accept
				</button>
				<button
					onClick={onDecline}
					className="popup__buttons__decline popup__button"
				>
					Decline
				</button>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isShow: state.popup.isShow,
		ip: state.user.ip,
	}
}

export default connect(mapStateToProps, { hidePopup, requestCurrentLocation })(
	Popup
)
