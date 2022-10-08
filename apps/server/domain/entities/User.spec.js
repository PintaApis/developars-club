const { User } = require("./User")

describe('User', () => {
  test('should return an user object when an User is created', () => {
    const validUser = { id: 'any_id', username: 'any_username', email: 'any_email', password: 'any_password'}
    const user = User(validUser)
    expect(user).toEqual(validUser)
  })
})