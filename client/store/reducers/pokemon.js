import { RECEIVE_API_ALL_POKEMON, RECEIVE_API_POKEMON } from '../types'

const INITIAL_STATE = {
  all: [],
  selected: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_API_ALL_POKEMON:
      return { ...state, all: action.payload }
    case RECEIVE_API_POKEMON:
      return { ...state, selected: action.payload }
    default:
      return state
  }
}
