import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import store from './redux/store'
import {
	loadingLocations,
	requestCurrentLocation,
} from './redux/actions/weather'
import ErrorBlock from './components/ErrorBlock/ErrorBlock'
import publicIp from 'public-ip'
import Popup from './components/Popup/Popup'
import Blocker from './components/Blocker/Blocker'
import { setIp } from './redux/actions/user'
import { showPopup } from './redux/actions/popup'

function App() {
	store.dispatch(loadingLocations())

	const initIP = async () => {
		const ip = await publicIp.v4()
		if (ip) {
			store.dispatch(setIp(ip))
		}
	}

	if (!localStorage.getItem('notFirst')) {
		store.dispatch(showPopup())
	}

	localStorage.setItem('notFirst', true)

	initIP()

	return (
		<div className="App">
			<Popup />
			<Blocker />
			<ErrorBlock />
			<Header />
			<Main />
		</div>
	)
}

export default App
