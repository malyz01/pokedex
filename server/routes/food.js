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
    app_id: process.env.FOOD_EDAMAM_ID,
    app_key: process.env.FOOD_EDAMAM_API
  }
})

// /api/v1/food/spoonacular/search
// queries:
// query, cuisine, diet, excludeIngredients, intolerances, offset, number, limitLicense, instructionsRequired
router.get('/spoonacular/search', async (req, res) => {
  try {
    const query = { params: { ...req.body } } || {}
    const response = await spoonacular.get('/search', query)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.json('Something went wrong in Get /api/v1/food/spoonacular/search')
  }
})

// /api/v1/food/spoonacular/random
router.get('/spoonacular/random', async (req, res) => {
  try {
    const response = await spoonacular.get('/random')
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
    res.json('Something went wrong in Get /api/v1/food/random')
  }
})

// /api/v1/food/edamam/search
// queries:
router.post('/edamam/search', async (req, res) => {
  try {
    const query = { params: { ...req.body } } || {}
    const response = await edamam.get('/search', query)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err.request)
    res.json('Something went wrong in Get /api/v1/food/edamam/search')
  }
})

module.exports = router
