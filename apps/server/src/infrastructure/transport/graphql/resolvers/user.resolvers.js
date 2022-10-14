const container = require('../../../../infrastructure/ioc/container')

const listUsers = () => container.cradle.listUsers()

const getUserById = (_, { id }) => container.cradle.getUserById(id)

const createUser = (_, { user }) => {
  const { email, password, username } = user

  return container.cradle.createUser({ email, username, password })
}

const updateUserSummary =  async (_, { id, summary}) => {
  const user = await container.cradle.updateUserSummary(id, { summary })
  return user
}

const userResolvers = {
  Query: {
    listUsers,
    getUserById
  },
  Mutation: {
    createUser,
    updateUserSummary
  }
}

module.exports = userResolvers