const router = require('express').Router()
const axios = require('axios')

const api = axios.create({
  baseURL: process.env.FOOD_URL,
  params: {
    apiKey: process.env.FOOD_API
  }
})

// /api/v1/food/random
router.get('/random', async (req, res) => {
  try {
    const result = await api.get('/random')
    res.json(result.data)
  } catch (err) {
    console.log(err)
    res.json('Something went wrong in Get - food api')
  }
})

module.exports = router
