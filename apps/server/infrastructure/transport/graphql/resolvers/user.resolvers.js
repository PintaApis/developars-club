const container = require('../../../../infrastructure/ioc/container')

const userResolvers = {
  Query: {
    listUsers: () => container.cradle.listUsers(),
    getUserById: (_, { id }) => container.cradle.getUserById(id)
  },
  Mutation: {
    createUser: (_, { user }) => {
      const { email, password } = user
      const createdUser = container.cradle.createUser({ email, password })
      return createdUser
    }
  }
}

module.exports = userResolvers