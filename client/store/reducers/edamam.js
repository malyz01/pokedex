import { RECEIVE_API_QUERT_EDAMAM } from '../types'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_API_QUERT_EDAMAM:
      return action.payload
    default:
      return state
  }
}
