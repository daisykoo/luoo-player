import React, { Component, Prototype } from 'react'
import Progress from './Progress'
class Audio extends Component {
	constructor(props) {
		super(props)
		this.state = {
			duration: 0,
			currentTime: 0
		}
		this.setTime = this.setTime.bind(this)
	}
	_countingTime() {
		const myAudio = this.refs.myAudio,
			interval = setInterval(()=>{
			this.setState({
				currentTime: myAudio.currentTime
			})
		}, 1000)
	}
	_timeFormat(time) {
		const min = Math.floor(time/60),
			sec = Math.floor(time % 60)
		function setTwo(num) {
			num = num.toString()
			return (num.length < 2) ? ('0' + num) : num;
		}
		return setTwo(min) + ':' + setTwo(sec)
	}
	setTime(time) {
		const myAudio = this.refs.myAudio
		myAudio.currentTime = time
		this.setState({currentTime: time})
	}
	componentDidMount() {
		const myAudio = this.refs.myAudio,
				{onEnd} = this.props

		this._countingTime()
		myAudio.onended = e => {
			onEnd()
		}
		myAudio.oncanplay = e => {
      this.setState({
        duration: myAudio.duration
      })
    }
	}
	componentWillReceiveProps(nextProps) {
		const myAudio = this.refs.myAudio
		if (nextProps.src === this.props.src) {
			(nextProps.isPlaying) ? myAudio.play() : myAudio.pause();
		} else {
			this.setState({
				duration: 0,
				currentTime: 0
			})
		}
	}
	render() {
		const {src} = this.props,
			{duration, currentTime} = this.state
		return (
			<div id="audio_container">
				<audio ref="myAudio" autoPlay src={src}>您的浏览器不支持audio</audio>
				<Progress duration={duration} currentTime={currentTime} setTime={this.setTime}></Progress>
				<div className="time">{this._timeFormat(currentTime)}/{this._timeFormat(duration)}</div>
			</div>
		)
	}
}

export default Audio;
