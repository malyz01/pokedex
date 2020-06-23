import { REQUEST_API_QUERY_EDAMAM, RECEIVE_API_QUERT_EDAMAM } from '../types'

export const requestApiEdamam = (payload) => ({
  type: REQUEST_API_QUERY_EDAMAM,
  payload
})

export const receiveApiEdamam = (edamam) => ({
  type: RECEIVE_API_QUERT_EDAMAM,
  payload: edamam
})
