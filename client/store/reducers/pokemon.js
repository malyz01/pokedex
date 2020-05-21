import { RECEIVE_API_ALL_POKEMON } from '../types'

const INITIAL_STATE = {
  all: [],
  selected: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_API_ALL_POKEMON:
      return action.payload
    default:
      return state
  }
}
