import React, { Component, PropTypes } from 'react'

class PlayList extends Component {
	constructor(props) {
	  super(props)
	  this.selectSong = this.selectSong.bind(this)
	}
	_decorateId(id) {
		return (id.length > 1) ? id : ('0'+id)
	}
	selectSong(e) {
		const {onChange} = this.props
		function getLi(item) {
			const id = item.getAttribute('data-relid');
			return (id) ? id : getLi(item.parentNode);
		}
		onChange(parseInt(getLi(e.target)))
	}
	render() {
		const {pl, current} = this.props,
			self = this
		return (
			<div>
			<ul>
			{pl.map((n, i, arr) => {
				return (
					<li className="pl_item"
						data-relid={self._decorateId(i)}
						key={self._decorateId(i)}
						onClick={self.selectSong}>
						{(current.current === i) ? <span className={'current_play ' + ((current.isPlaying) ? 'pause' : null)}></span> : null}
						<span className="name">{self._decorateId(i+1)}. {n.name} </span>
						<span className="artist">{n.artist}</span>
					</li>
				)
			})}
			</ul>
			</div>
		)
	}
}
PlayList.propTypes = {
	pl: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	onChange: PropTypes.func.isRequired
}
export default PlayList;