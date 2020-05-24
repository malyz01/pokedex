import { SET_ERROR } from '../types'

const INITIAL_STATE = {
  status: null,
  message: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { status: action.status, message: action.message }

    default:
      return state
  }
}
