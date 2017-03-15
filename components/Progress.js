import React, { Component, Prototype } from 'react'

class Audio extends Component {
	constructor(props) {
		super(props)
		this.state = {
			outerStyle: {
				width: '150px',
				height: '6px',
				borderRadius: '3px',
				background: '#ddd',
				cursor: 'pointer'
			}
		}
		this.handleClick = this.handleClick.bind(this)
	}
	_getElementLeft(ele) {
		let dis = ele.offsetLeft,
			current = ele.offsetParent
		while(current !== null) {
			dis += current.offsetLeft
			current = current.offsetParent
		}
		return dis;
 	}
 	handleClick(e) {
		const {setTime, duration} = this.props,
			wrapper = this.refs.wrapper,
			wrapper_dis = this._getElementLeft(wrapper),
			time = ((e.pageX - wrapper_dis)/wrapper.clientWidth) * duration
		setTime(time)
	}
	render() {
		const {outerStyle, progressStyle} = this.state,
				{duration, currentTime} = this.props,
				progressWidth = (currentTime/duration) * 100 + '%'
		return (
			<div ref="wrapper" style={outerStyle} onClick={this.handleClick}>
				<div ref="progress" 
					style={{
						width: progressWidth, 
						height: '100%', 
						background: '#dd5862',
						borderRadius: '3px',
					}}></div>
			</div>
		)
	}
}

export default Audio;
