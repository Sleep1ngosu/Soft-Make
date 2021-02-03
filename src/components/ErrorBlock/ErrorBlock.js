import React from 'react'
import './ErrorBlock.scss'
import { connect } from 'react-redux'
import close from '../../assets/icons/close.png'
import { removeError } from '../../redux/actions/error'

const ErrorBlock = ({ isShow, message, removeError }) => {
	const style = (isShow && { display: 'flex' }) || { display: 'none' }

	const onRemove = () => {
		removeError()
	}

	return (
		<div style={style} className="errorBlock__wrapper">
			<div className="errorBlock">
				<div className="errorBlock__message">
					<span title={message} className="errorBlock__message__text">
						{message}
					</span>
				</div>
				<div onClick={onRemove} className="errorBlock__close">
					<img
						src={close}
						alt="close icon"
						className="errorBlock__close__icon"
					/>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isShow: state.error.isShow,
		message: state.error.message,
	}
}

export default connect(mapStateToProps, { removeError })(ErrorBlock)
