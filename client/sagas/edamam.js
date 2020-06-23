import api from '../api'
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'

import { receiveApiEdamam } from '../store/actions/edamam'
import { setError } from '../store/actions/error'
import { REQUEST_API_QUERY_EDAMAM } from '../store/types'

async function apiPostCall(body) {
  return await api.post('/food/edamam/search', body)
}

function* callQueryEdamam(action) {
  try {
    const { data } = yield call(apiPostCall, action.payload)
    yield put(receiveApiEdamam(data))
  } catch (err) {
    const { status, data } = err.response
    yield put(setError(status, data))
  }
}

export default function* requestEdamamSaga() {
  yield takeLatest(REQUEST_API_QUERY_EDAMAM, callQueryEdamam)
}
