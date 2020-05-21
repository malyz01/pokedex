import {
  REQUEST_API_ALL_POKEMON,
  RECEIVE_API_ALL_POKEMON,
  REQUEST_API_POKEMON,
  RECEIVE_API_POKEMON
} from '../types'

export const requestApiAllPokemon = () => ({
  type: REQUEST_API_ALL_POKEMON
})

export const receiveApiAllPokemon = (pokemon) => ({
  type: RECEIVE_API_ALL_POKEMON,
  payload: pokemon
})

export const requestApiPokemon = (id) => ({
  type: REQUEST_API_POKEMON,
  payload: id
})

export const receiveApiPokemon = (pokemon) => ({
  type: RECEIVE_API_POKEMON,
  payload: pokemon
})
