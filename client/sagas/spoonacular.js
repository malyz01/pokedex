import api from '../api'
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'

import { receiveApiSpoonacular } from '../store/actions/spoonacular'
import { setError } from '../store/actions/error'
import { REQUEST_API_QUERY_SPOONACULAR } from '../store/types'

async function apiPostCall(body) {
  return await api.post('/food/spoonacular/search', body)
}

function* callQuerySpoonacular(action) {
  try {
    const { data } = yield call(apiPostCall, action.payload)
    yield put(receiveApiSpoonacular(data))
  } catch (err) {
    const { status, data } = err.response
    yield put(setError(status, data))
  }
}

export default function* requestSpoonacularSaga() {
  yield takeLatest(REQUEST_API_QUERY_SPOONACULAR, callQuerySpoonacular)
}
