const { Sequelize } = require('sequelize')
const { MYSQL_DB, MYSQL_USER, MYSQL_PWD, MYSQL_HOST } = require('../config/config.default')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql',
  timezone: '+08:00'
})

module.exports = seq