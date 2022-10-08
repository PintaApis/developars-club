const server = require('./infrastructure/transport/graphql/server')
// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 4000
server.listen(port).then(({ url }) => console.log(`🚀  Server ready at ${url}`))
