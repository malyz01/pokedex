const router = require('express').Router()
const axios = require('axios')

const api = { apiKey: process.env.FOOD_API }

// /api/v1/food
router.get('/', async (req, res) => {
  const params = req.body || {}
  try {
    const result = await axios.get(
      'https://api.spoonacular.com/recipes/random',
      api
    )
    res.json(result)
  } catch (err) {
    console.log(err.response.data)
    res.json(err.response.data.message)
  }
})

module.exports = router
