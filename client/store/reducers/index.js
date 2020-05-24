import { combineReducers } from 'redux'
import pokemon from './pokemon'
import error from './error'

export default combineReducers({
  pokemon,
  error
})
