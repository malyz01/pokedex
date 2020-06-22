const router = require('express').Router()
const axios = require('axios')

const api = axios.create({
  baseURL: process.env.FOOD_URL,
  params: {
    apiKey: process.env.FOOD_API
  }
})

// /api/v1/food/spoonacular/search
// queries:
// query, cuisine, diet, excludeIngredients, intolerances, offset, number, limitLicense, instructionsRequired
router.get('/search', async (req, res) => {
  try {
    const query = { params: { ...req.body } } || {}
    const response = await api.get('/spoonacular/search', query)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.json('Something went wrong in Get /api/v1/food/spoonacular/search')
  }
})

// /api/v1/food/spoonacular/random
router.get('/spoonacular/random', async (req, res) => {
  try {
    const response = await api.get('/spoonacular/random')
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.json('Something went wrong in Get /api/v1/food/random')
  }
})

module.exports = router
