import { REQUEST_API_QUERY_EDAMAM, RECEIVE_API_QUERT_EDAMAM } from '../types'

export const requestApiAllPokemon = () => ({
  type: REQUEST_API_QUERY_EDAMAM
})

export const receiveApiAllPokemon = (edamam) => ({
  type: RECEIVE_API_QUERT_EDAMAM,
  payload: edamam
})
