import { RECEIVE_API_QUERY_SPOONACULAR } from '../types'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_API_QUERY_SPOONACULAR:
      return action.payload
    default:
      return state
  }
}
