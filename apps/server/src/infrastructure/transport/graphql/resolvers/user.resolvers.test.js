const {
  createUserHelper,
  updateUserSummaryHelper,
  getUserByIdHelper,
  listUsersHelper
} = require('../../../../utils/tests/user.resolver.helpers')

const testServer = require('../server')

describe('User Resolvers', () => {
  it('should return a new user when createUser is called', async () => {
    const result = await testServer.executeOperation(createUserHelper())

    expect(result.errors).toBeUndefined()
    expect(result.data?.createUser).toEqual({
      id: '1',
      email: 'any_email@mail.com',
      username: 'any_username',
      photo: null,
      summary: null
    })
  })

  it('should return an user with updated summary when UpdateUserSummary is called', async () => {
    const { data: { createUser} } = await testServer.executeOperation(createUserHelper())
    const { data: { updateUserSummary } } = await testServer.executeOperation(
      updateUserSummaryHelper(createUser.id, 'any_summary')
    )

    expect(updateUserSummary.summary).toBe('any_summary')
  })

  it('should return an user when getUserById is called', async () => {
    const { data: { createUser} } = await testServer.executeOperation(createUserHelper())
    const { data: { getUserById }} = await testServer.executeOperation(
      getUserByIdHelper(createUser.id)
    )

    expect(getUserById).toEqual({
      id: createUser.id,
      email: 'any_email@mail.com',
      username: 'any_username',
      photo: null,
      summary: null
    })
  })

  it('should return many uses when listUsersHelper is called', async () => {
    await testServer.executeOperation(createUserHelper())
    await testServer.executeOperation(createUserHelper())

    const { data: { listUsers }} = await testServer.executeOperation(listUsersHelper())

    expect(Array.isArray(listUsers)).toBe(true)
    expect(listUsers.length).toBeGreaterThanOrEqual(2)
  })
})