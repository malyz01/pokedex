import { all } from 'redux-saga/effects'
import pokemon from './pokemon'
import edamam from './edamam'
import spoonacular from './spoonacular'

export function* rootSaga() {
  yield all([pokemon(), edamam(), spoonacular()])
}
