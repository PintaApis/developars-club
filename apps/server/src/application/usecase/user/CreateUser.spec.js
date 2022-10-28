const { User } = require('../../../domain/entities/User')
const { UserRepository } = require('../../../infrastructure/repositories/memory/UserRepository')
const CreateUser = require('./CreateUser')

const makeSut = () => {
  const validUser = {
    email: 'any_email',
    username: 'any_username',
    password: 'any_password'
  }

  const userRepository = UserRepository()

  return {
    validUser,
    userRepository,
    sut: CreateUser({ userRepository, User})
  }
}

describe('UseCase createUser', () => {
  test('should return an user when user is persist', async () => {
    const { sut, validUser } = makeSut()
    const user = await sut(validUser)

    expect(user).toEqual({ id: '1', ...validUser })
  })
  // TODO: Create test should raise an exception when data is not valid
  // TODO: Create test should raise an exception on unexpected errors
})