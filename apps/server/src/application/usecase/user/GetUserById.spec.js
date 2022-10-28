const { User } = require('../../../domain/entities/User')
const { UserRepository } = require('../../../infrastructure/repositories/inMemory/UserRepository')

const CreateUser = require('./CreateUser')
const GetUserById = require('./GetUserById')

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
    sut: GetUserById({ userRepository }),
  }
}

describe('UseCase getUserById', () => {
  const { sut, validUser, userRepository } = makeSut()

  beforeAll(async () => {
    const createUser = CreateUser({ userRepository, User })
    await createUser(validUser)
  })

  test('should return an user by id', async () => {
    const user = await sut('1')

    expect(user.id).toBe('1')
  })
  // TODO: should raise an exception when user is not found
  // TODO: should raise an exception when id is not valid
  // TODO: Create test should raise an exception on unexpected errors
})