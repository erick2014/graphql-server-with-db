var Sequelize = require('sequelize');

var Client = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  client: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  zipCode: {
    type: Sequelize.STRING
  },
  clientType: {
    type: Sequelize.STRING
  },
  phoneOne: {
    type: Sequelize.STRING
  },
  phoneTwo: {
    type: Sequelize.STRING
  },
  fax: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  contact: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  documentType: {
    type: Sequelize.STRING
  }
}

module.exports = Client;

