import {
  REQUEST_API_QUERY_SPOONACULAR,
  RECEIVE_API_QUERY_SPOONACULAR
} from '../types'

export const requestApiSpoonacular = (payload) => ({
  type: REQUEST_API_QUERY_SPOONACULAR,
  payload
})

export const receiveApiSpoonacular = (payload) => ({
  type: RECEIVE_API_QUERY_SPOONACULAR,
  payload
})
