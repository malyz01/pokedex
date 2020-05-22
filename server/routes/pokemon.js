const router = require('express').Router()
const axios = require('axios')

const { client, cache } = require('../middleware/redis')

router.get('/pokemon', cache('pokemon'), async (req, res) => {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=1000'
  )
  client.set('pokemon', JSON.stringify(data.results))
  res.status(200).json(data.results)
})

router.get('/pokemon/:id', cache('pokemon'), async (req, res) => {
  const { id } = req.params
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
  )
  client.set(`pokemon${id}`, JSON.stringify(data))
  res.status(200).json(data)
})

module.exports = router
