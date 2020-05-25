const db = require('../connection')
const { STRING } = require('sequelize')

const User = db.define('user', {
  firstName: {
    type: STRING
  },
  lastName: {
    type: STRING
  }
})

User.create({
  firstName: 'Fuwoo',
  lastName: 'Uy'
})

User.findAll().then((users) => console.log(users[2].dataValues))

module.exports = User
