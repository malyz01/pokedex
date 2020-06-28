import * as t from '../types'

const INITIAL = {
  queries: {},
  recipe: {}
}

export default (state = INITIAL, action) => {
  switch (action.type) {
    case t.RECEIVE_API_QUERY_SPOONACULAR:
      return { ...state, queries: action.payload }
    case t.RECEIVE_API_RECIPE_INFO:
      return { ...state, recipe: action.payload }
    default:
      return state
  }
}
