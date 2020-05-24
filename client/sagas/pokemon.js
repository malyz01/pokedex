import api from '../api'
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'

import {
  receiveApiAllPokemon,
  receiveApiPokemon
} from '../store/actions/pokemon'
import { setError } from '../store/actions/error'
import { REQUEST_API_ALL_POKEMON, REQUEST_API_POKEMON } from '../store/types'

function* callGetAllPokemon() {
  const { data } = yield call(api.get, '/pokemon')
  yield put(receiveApiAllPokemon(data))
}

function* callGetPokemon(action) {
  try {
    const { data } = yield call(api.get, `/pokemon/${action.payload}`)
    yield put(receiveApiPokemon(data))
  } catch (err) {
    const { status, data } = err.response
    yield put(setError(status, data))
  }
}

export default function* requestPokemonSaga() {
  yield takeEvery(REQUEST_API_ALL_POKEMON, callGetAllPokemon)
  yield takeLatest(REQUEST_API_POKEMON, callGetPokemon)
}
