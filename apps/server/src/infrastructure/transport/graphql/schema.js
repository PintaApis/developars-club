const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

const typesArray = loadFilesSync(path.join(__dirname, './typedefs'), {
  extensions: ['gql']
})
const resolversArray = loadFilesSync(
  path.join(__dirname, './resolvers/*.resolvers.*')
)

exports.mergedTypes = mergeTypeDefs(typesArray)
exports.mergedResolvers = mergeResolvers(resolversArray)