import { combineReducers } from 'redux'
import { PL } from '../data/'
import {
  SELECT_SONG, TOGGLE_PLAY
} from '../actions/'

function playList(state = PL, action) {
  return state
}

function selectedSong(state = { current: 0, isPlaying: true}, action) {
  switch (action.type) {
    case SELECT_SONG:
      return Object.assign({}, state, {
        current: action.songId,
        isPlaying: true
      })
    case TOGGLE_PLAY:
      return Object.assign({}, state, {
        isPlaying: !state.isPlaying
      })
    default: 
      return state
  }
}

const rootReducer = combineReducers({
  selectedSong,
  playList
})

export default rootReducer