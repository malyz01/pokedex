import api from '../api'
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'

import * as a from '../store/actions/spoonacular'
import * as t from '../store/types'
import { setError } from '../store/actions/error'
import { REQUEST_API_QUERY_SPOONACULAR } from '../store/types'

async function apiPostCall(body) {
  return await api.post('/food/spoonacular/search', body)
}

async function apiGetRecipeInfo(id) {
  return await api.get(`/food/spoonacular/recipe/${id}`)
}

function* callQuerySpoonacular(action) {
  try {
    const { data } = yield call(apiPostCall, action.payload)
    yield put(a.receiveApiSpoonacular(data))
  } catch (err) {
    const { status, data } = err.response
    yield put(setError(status, data))
  }
}

function* callGetRecipeInfo(action) {
  try {
    const { data } = yield call(apiGetRecipeInfo, action.payload)
    yield put(a.receiveApiRecipeInfo(data))
  } catch (err) {
    const { status, data } = err.response
    yield put(setError(status, data))
  }
}

export default function* requestSpoonacularSaga() {
  yield takeLatest(t.REQUEST_API_QUERY_SPOONACULAR, callQuerySpoonacular)
  yield takeLatest(t.REQUEST_API_RECIPE_INFO, callGetRecipeInfo)
}
