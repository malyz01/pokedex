import api from '../api'
import { takeEvery, call, put } from 'redux-saga/effects'

import {
  receiveApiAllPokemon,
  receiveApiPokemon
} from '../store/actions/pokemon'
import { REQUEST_API_ALL_POKEMON, REQUEST_API_POKEMON } from '../store/types'

function* callGetAllPokemon() {
  const { data } = yield call(api.get, '/pokemon')
  yield put(receiveApiAllPokemon(data))
}

export function* requestAllPokemonSaga() {
  yield takeEvery(REQUEST_API_ALL_POKEMON, callGetAllPokemon)
}

function* callGetPokemon(action) {
  console.log(action)
  const { data } = yield call(api.get, `/pokemon/${action.payload}`)
  yield put(receiveApiPokemon(data))
}

export function* requestPokemonSaga() {
  yield takeEvery(REQUEST_API_POKEMON, callGetPokemon)
}
