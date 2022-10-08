const { ApolloServer } = require('apollo-server')
const { mergedResolvers, mergedTypes } = require('./schema')

const apolloServer = new ApolloServer({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
})

module.exports = apolloServer