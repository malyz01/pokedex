const router = require('express').Router()
const axios = require('axios')

router.get('/pokemon', async (req, res) => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
  res.json(data)
})

module.exports = router
