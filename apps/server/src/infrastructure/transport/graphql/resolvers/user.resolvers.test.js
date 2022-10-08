const { createUserHelper, updateUserSummaryHelper } = require('../../../../utils/tests/user.resolver.helpers');
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
    const { data: { updateUserSummary} } = await testServer.executeOperation(updateUserSummaryHelper({ updateUserSummaryId: createUser.id, summary: 'any_summary' }))
    expect(updateUserSummary.summary).toBe('any_summary')
  })
})