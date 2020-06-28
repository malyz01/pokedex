import * as t from '../types'

export const requestApiSpoonacular = (payload) => ({
  type: t.REQUEST_API_QUERY_SPOONACULAR,
  payload
})

export const receiveApiSpoonacular = (payload) => ({
  type: t.RECEIVE_API_QUERY_SPOONACULAR,
  payload
})

export const requestApiRecipeInfo = (payload) => ({
  type: t.REQUEST_API_RECIPE_INFO,
  payload
})

export const receiveApiRecipeInfo = (payload) => ({
  type: t.RECEIVE_API_RECIPE_INFO,
  payload
})
