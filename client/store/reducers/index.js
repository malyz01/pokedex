import { combineReducers } from 'redux'
import pokemon from './pokemon'
import edamam from './edamam'
import error from './error'

export default combineReducers({
  edamam,
  pokemon,
  error
})
