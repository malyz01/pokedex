const redis = require('redis')

const REDIS_PORT = process.env.REDIS_PORT || 6379
const client = redis.createClient(REDIS_PORT)

module.exports = {
  client,
  cache: (req, res, next) => {
    client.get('pokemon', (err, data) => {
      if (err) throw err

      if (data !== null) {
        res.json(JSON.parse(data))
      } else {
        next()
      }
    })
  }
}
