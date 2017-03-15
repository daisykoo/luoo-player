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
			<div>
				<div id="song_container">
					<img src={item.cover}></img>
					<div className="msg_wrap">
						<h1>{item.name}</h1>
						<h2>Artist: {item.artist}</h2>
						<h2>Album: {item.album}</h2>
						<div id="play_control">
							<a className="prev" href="javascript:;" onClick={this.prev}></a>
							<a className="play" href="javascript:;" onClick={onToggle} 
								style={(song.isPlaying)? {backgroundPosition: '-50px -200px'} : null}></a>
							<a className="next" href="javascript:;" onClick={this.next}></a>
						</div>
						<Audio src={item.src} isPlaying={song.isPlaying} onEnd={this.next}></Audio>
					</div>
				</div>
				<PlayList pl={pl} current={song} onChange={onChange}></PlayList>
			</div>
		)
	}
}

export default Song;