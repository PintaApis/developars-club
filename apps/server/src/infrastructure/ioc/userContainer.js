const { asFunction, asValue } = require('awilix')
const { CreateUser, ListUsers, GetUserById, UpdateUserSummary } = require('../../application/usecase/user')
const { User } = require('../../domain/entities/User')
const { UserRepository } = require('../repositories/inMemory/UserRepository')

const makeUserContainer = container => {
  
  container.register({
    createUser: asFunction(CreateUser),
    listUsers: asFunction(ListUsers),
    getUserById: asFunction(GetUserById),
    updateUserSummary: asFunction(UpdateUserSummary),
    userRepository: asFunction(UserRepository).singleton(),
    User: asValue(User)
  })
  return {
    createUser: container.resolve('createUser'),
    listUsers: container.resolve('listUsers'),
    getUserById: container.resolve('getUserById'),
    updateUserSummary: container.resolve('updateUserSummary')
  }
}

module.exports = makeUserContainer