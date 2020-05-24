import { SET_ERROR } from '../types'

export const setError = (status, message) => ({
  type: SET_ERROR,
  status,
  message
})
