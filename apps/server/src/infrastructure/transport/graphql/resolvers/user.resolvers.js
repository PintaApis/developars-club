const container = require('../../../../infrastructure/ioc/container')

const userResolvers = {
  Query: {
    listUsers: () => container.cradle.listUsers(),
    getUserById: (_, { id }) => container.cradle.getUserById(id)
  },
  Mutation: {
    createUser: (_, { user }) => {
      const { email, password, username } = user
      return container.cradle.createUser({ email, username, password })
    },
    updateUserSummary: async (_, { id, summary}) => {
      const user = await container.cradle.updateUserSummary(id, { summary })
      return user
    }
  }
}

module.exports = userResolvers