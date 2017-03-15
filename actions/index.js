export const SELECT_SONG = 'SELECT_SONG'
export const TOGGLE_PLAY = 'TOGGLE_PLAY'

export function togglePlay() {
	return {
		type: TOGGLE_PLAY
	}
}
function realSelectSong(songId) {
	return {
		type: SELECT_SONG,
		songId
	}
}
export function selectSong(songId) {
	return (dispatch, getState) => {
		const state = getState()
		if (state.selectedSong.current === songId) {
			dispatch(togglePlay())
		} else {
			dispatch(realSelectSong(songId))
		}
	}
}

