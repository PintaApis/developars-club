const { User } = require("../../../domain/entities/User")
const { UserRepository } = require("../../../infrastructure/repositories/inMemory/UserRepository")
const { ListUsers } = require("./ListUsers")
const { CreateUser } = require('./CreateUser')

const makeSut = () => {
  const validUser = { email: 'any_email', username: 'any_username', password: 'any_password'}
  const userRepository = UserRepository()
  return {
    validUser,
    userRepository,
    sut: ListUsers({ userRepository }),
    
  }
}
describe('UseCase listUsers', () => {
  const { sut, validUser, userRepository } = makeSut()
  beforeAll(async () => {
    const createUser = CreateUser({ userRepository, User})
    await createUser(validUser)
    await createUser(validUser)
    await createUser(validUser)
  })

  test('should return all users in db', async () => {
    const users = await sut()
    expect(users.length).toEqual(3)
  })
})