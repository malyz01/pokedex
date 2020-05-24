const router = require('express').Router()
const axios = require('axios')

const { client, cache } = require('../middleware/redis')

router.get('/pokemon', cache('pokemon'), async (req, res) => {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=1000'
  )
  client.setex('pokemon', 7200, JSON.stringify(data.results))
  res.status(200).json(data.results)
})

router.get('/pokemon/:id', cache('pokemon'), async (req, res) => {
  try {
    const { id } = req.params
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    )
    client.setex(`pokemon${id}`, 7200, JSON.stringify(data))
    res.status(200).json(data)
  } catch (err) {
    res.status(404).json('No Information available')
  }
})

module.exports = router
