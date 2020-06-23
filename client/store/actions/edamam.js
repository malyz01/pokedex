import { REQUEST_API_QUERY_EDAMAM, RECEIVE_API_QUERT_EDAMAM } from '../types'

export const requestApiEdamam = () => ({
  type: REQUEST_API_QUERY_EDAMAM
})

export const receiveApiEdamam = (edamam) => ({
  type: RECEIVE_API_QUERT_EDAMAM,
  payload: edamam
})
