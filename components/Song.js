import React, { Component, Prototype } from 'react'
import Audio from './Audio'
import PlayList from './PlayList'

class Song extends Component {
	constructor(props) {
		super(props)
		this.prev = this.prev.bind(this)
	    this.next = this.next.bind(this)
	}
	prev() {
		const {pl, song, onChange} = this.props
		onChange((song.current === 0) ? pl.length-1 : song.current-1)
	}
	next() {
		const {pl, song, onChange} = this.props
		onChange((song.current === pl.length-1) ? 0 : song.current+1)
	}
	render() {
		const {pl, song, onChange, onToggle} = this.props
		const item = pl[song.current]
		return (
			<div id="song_container">
				<img src={item.cover}></img>
				<h1>{item.name}</h1>
				<h2>{item.artist}</h2>
				<div id="play_control">
					<a href="javascript:;" onClick={this.prev}>⬅️</a>
					<a href="javascript:;" onClick={onToggle}>播放/暂停</a>
					<a href="javascript:;" onClick={this.next}>➡️</a>
				</div>
				<Audio src={item.src} isPlaying={song.isPlaying} onEnd={this.next}></Audio>
				<PlayList pl={pl} onChange={onChange}></PlayList>
			</div>
		)
	}
}

export default Song;