import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectedSong } from '../actions'
import Song from '../components/Song'
import {selectSong, togglePlay} from '../actions/'

class Player extends Component {
	constructor(props) {
		super(props)
		this.handleSongChange = this.handleSongChange.bind(this)
		this.handleTogglePlay = this.handleTogglePlay.bind(this)
	}
	handleSongChange(songId) {
		this.props.dispatch(selectSong(songId))
	}
	handleTogglePlay() {
		this.props.dispatch(togglePlay())
	}
	render() {
		const { selectedSong, playList } = this.props
		return (
			<Song song={selectedSong} 
				pl={playList}
				onChange={this.handleSongChange}
				onToggle={this.handleTogglePlay}></Song>
		)
	}
}

function mapStateToProps(state) {
	const { selectedSong, playList } = state
	return {
		selectedSong,
		playList
	}
}

export default connect(mapStateToProps)(Player)