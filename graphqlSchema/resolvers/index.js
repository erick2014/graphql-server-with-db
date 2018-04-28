const base = process.cwd();
const path = require('path');
const { fileLoader, mergeResolvers } = require('merge-graphql-schemas');

const resolvers = fileLoader(path.join(base, '/graphqlSchema/resolvers'));

module.exports = mergeResolvers(resolvers);
