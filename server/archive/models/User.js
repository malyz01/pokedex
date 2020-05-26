const { STRING } = require('sequelize')
const db = require('../connection')

const User = db.define('user', {
  firstName: {
    type: STRING
  },
  lastName: {
    type: STRING
  }
})

// TODO explore migration and seed
// User.create({
//   firstName: 'Fuwoo',
//   lastName: 'Uy'
// })

User.findAll().then((users) => console.log(users[0].dataValues))

module.exports = User
