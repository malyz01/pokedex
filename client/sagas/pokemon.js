import api from '../api'
import { takeEvery, call, put } from 'redux-saga/effects'

import { receiveApiAllPokemon } from '../store/actions/pokemon'
import { REQUEST_API_ALL_POKEMON, REQUEST_API_POKEMON } from '../store/types'

function* callRequestAllPokemon(action) {
  const { data } = yield call(api.get, '/pokemon')
  yield put(receiveApiAllPokemon(data.results))
}

export function* requestAllPokemonSaga() {
  yield takeEvery(REQUEST_API_ALL_POKEMON, callRequestAllPokemon)
}

function* callRequestPokemon(action) {
  const { data } = yield call(api.get, `/pokemon/${action.payload}`)
  yield put(receiveApiAllPokemon(data))
}

export function* requestPokemonSaga() {
  yield takeEvery(REQUEST_API_POKEMON, callRequestPokemon)
}
