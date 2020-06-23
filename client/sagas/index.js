import { all } from 'redux-saga/effects'
import pokemon from './pokemon'
import edamam from './edamam'

export function* rootSaga() {
  yield all([pokemon(), edamam()])
}
