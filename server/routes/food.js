const router = require('express').Router()
const axios = require('axios')

const spoonacular = axios.create({
  baseURL: process.env.FOOD_SPOONACULAR_URL,
  params: {
    apiKey: process.env.FOOD_SPOONACULAR_API
  }
})

const edamam = axios.create({
  baseURL: process.env.FOOD_EDAMAM_URL,
  params: {
    app_id: process.env.FOOD_EDAMAM_API
  }
})

// /api/v1/food/spoonacular/search
// queries:
// query, cuisine, diet, excludeIngredients, intolerances, offset, number, limitLicense, instructionsRequired
router.get('/search', async (req, res) => {
  try {
    const query = { params: { ...req.body } } || {}
    const response = await spoonacular.get('/spoonacular/search', query)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.json('Something went wrong in Get /api/v1/food/spoonacular/search')
  }
})

// /api/v1/food/spoonacular/random
router.get('/spoonacular/random', async (req, res) => {
  try {
    const response = await spoonacular.get('/spoonacular/random')
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.json('Something went wrong in Get /api/v1/food/random')
  }
})

// /api/v1/food/edamam/search
// queries:
router.get('/search', async (req, res) => {
  try {
    const query = { params: { ...req.body } } || {}
    const response = await api.get('/edamam/search', query)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.json('Something went wrong in Get /api/v1/food/edamam/search')
  }
})

module.exports = router
