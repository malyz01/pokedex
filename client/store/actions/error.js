import { SET_ERROR } from '../types'

export const setError = (status = null, message = null) => ({
  type: SET_ERROR,
  status,
  message
})
