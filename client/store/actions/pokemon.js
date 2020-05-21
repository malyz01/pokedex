import { REQUEST_API_ALL_POKEMON, RECEIVE_API_ALL_POKEMON } from '../types'

export const requestApiAllPokemon = () => ({
  type: REQUEST_API_ALL_POKEMON
})

export const receiveApiAllPokemon = (pokemon) => ({
  type: RECEIVE_API_ALL_POKEMON,
  payload: pokemon
})
