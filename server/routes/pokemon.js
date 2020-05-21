const router = require('express').Router()
const axios = require('axios')

router.get('/pokemon', async (req, res) => {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=1000'
  )
  res.json(data)
})

router.get('/pokemon/:id', async (req, res) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
  )
  res.json(data)
})

module.exports = router
