import { RECEIVE_API_QUERT_SPOONACULAR } from '../types'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_API_QUERT_SPOONACULAR:
      return action.payload
    default:
      return state
  }
}
