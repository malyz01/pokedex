const redis = require('redis')

const REDIS_PORT = process.env.REDIS_PORT || 6379
const client = redis.createClient(REDIS_PORT)

module.exports = {
  client,
  cache: (name) => (req, res, next) => {
    const params = Object.keys(req.params)[0] || []
    const p = params.length ? `${name}${req.params[params]}` : name
    client.get(p, (err, data) => {
      if (err) throw err

      if (data !== null) {
        res.json(JSON.parse(data))
      } else {
        next()
      }
    })
  }
}
