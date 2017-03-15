import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { creatStore } from 'redux'
import configureStore from '../store'
import Player from './Player'

const store = configureStore()

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Player />
			</Provider>
		)
	}
}