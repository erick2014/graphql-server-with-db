var express = require('express');
var corser = require("corser");
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const getConnectionConfig = require('./graphqlSchema/utils/getConnectionConfig')
const schema = require("./graphqlSchema");
//import resolvers
const rootResolver = require("./graphqlSchema/resolvers");
//import required models
const ClientModel = require("./models/clientModel")

// get an instace from express
const app = express()
// define the port where the server is going to listen to
const port = process.env.PORT || 3002
// configure db connection and get an instance
const sequelizeInstance = getConnectionConfig()
// try yo connect to the db
sequelizeInstance
  .authenticate()
  .then((resp) => {
    console.log("connection has been established successfully");
    //pass the sequelize instance through the request object
    app.use((req, res, next) => {
      req["sequelize"] = sequelizeInstance;
      req["clientModel"] = sequelizeInstance.define('clients', ClientModel, { freezeTableName: true });
      next();
    })

    app.use(corser.create());

    app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: rootResolver,
      graphiql: true
    }))

    app.listen(port);
    console.log("server running at port " + port);
  })
  .catch(err => { console.error("Unable to connect to the data base", err); })
