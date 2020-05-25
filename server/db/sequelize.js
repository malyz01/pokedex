const Sequelize = require('sequelize')

module.exports = {
  development: new Sequelize({
    dialect: 'sqlite',
    storage: './server/db/database.sqlite'
  })
}
