const router = require('express').Router()
const axios = require('axios')

const { client, cache } = require('../middleware/redis')

router.get('/pokemon', cache, async (req, res) => {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=1000'
  )
  client.set('pokemon', JSON.stringify(data.results))
  res.json(data.results)
})

router.get('/pokemon/:id', async (req, res) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
  )
  res.json(data)
})

module.exports = router
