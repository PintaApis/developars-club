const { User } = require('../../../domain/entities/User')
const { UserRepository } = require('../../../infrastructure/repositories/inMemory/UserRepository')

const UpdateUserSummary = require('./UpdateUserSummary')
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
    sut: UpdateUserSummary({ userRepository })
  }
}

describe('UseCase UpdateUserSummary', () => {
  test('should return an user with updated summary', async () => {
    const { sut, validUser, userRepository } = makeSut()
    const createUser = CreateUser({ userRepository, User})

    const user = await createUser(validUser)
    const updatedUser = await sut(user.id, { summary: 'any_summary' })

    expect(updatedUser.summary).toBe('any_summary')
  })
  // TODO: should raise an exception when user is not found
  // TODO: should raise an exception when id is not valid
  // TODO: Create test should raise an exception on unexpected errors
})