import { all } from 'redux-saga/effects'
import pokemon from './pokemon'

export function* rootSaga() {
  yield all([pokemon()])
}
