const Sequelize = require('sequelize');

const { PORT, ENVIRONMENT, DB, DB_USER, DB_PASS } = process.env

const getDbHost = () => {
  const dbHost = (ENVIRONMENT === "production") ? 'localhost' : '45.56.118.22'
  return dbHost
}

const getConnectionConfig = () => {
  //get  sequelize instance with a connection to a db
  const sequelizeInstance = new Sequelize(DB, DB_USER, DB_PASS, {
    dialect: "mysql",
    host: getDbHost(),
    define: { freezeTableName: true, timestamps: false }
  })
  return sequelizeInstance
}

module.exports = getConnectionConfig
