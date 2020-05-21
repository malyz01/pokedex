import { fork, all } from 'redux-saga/effects'
import * as pokemon from './pokemon'

export function* rootSaga() {
  yield all([...Object.values(pokemon)].map(fork))
}
