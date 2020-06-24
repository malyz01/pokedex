import { combineReducers } from 'redux'
import pokemon from './pokemon'
import edamam from './edamam'
import spoonacular from './spoonacular'
import error from './error'

export default combineReducers({
  edamam,
  spoonacular,
  pokemon,
  error
})
