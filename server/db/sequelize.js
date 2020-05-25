const Sequelize = require('sequelize')

module.exports = {
  development: new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })
}
