const redis = require('redis')

const REDIS_PORT = process.env.REDIS_PORT || 6379
const client = redis.createClient(REDIS_PORT)

module.cache = (req, res, next) => {
  client.get('pokemon')
}

module.exports = client
