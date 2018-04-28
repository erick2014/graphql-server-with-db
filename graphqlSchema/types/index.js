const base = process.cwd();
const path = require('path');
const {
	fileLoader,
  mergeTypes
} = require('merge-graphql-schemas');

const types = fileLoader(path.join(base, '/graphqlSchema/types'));

module.exports = mergeTypes(types);
