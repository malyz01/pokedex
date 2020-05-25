const sequelize = require('./sequelize').development

sequelize
  .authenticate()
  .then(() => console.log('connected to database'))
  .catch((err) => console.log(err))
